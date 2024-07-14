import { GetKrsResponse, GetMkMhs, Paging, PostKrsResponse } from "../controller/controller";
import { Request } from "express";
import { prisma } from "../lib/prisma-client";
import getMataKuliahKrsService from "./get-matakuliah-krs-service";

export class KrsService {
  static async get(req: Request): Promise<GetKrsResponse[]> {
    const { id_mahasiswa } = req.params;

    return await prisma.mataKuliah_mhs.findMany({
      where: { mahasiswaId: id_mahasiswa, status: "off" },
      include: { mataKuliah: true },
    });
  }

  static async post(req: Request): Promise<PostKrsResponse> {
    const { id_mahasiswa, id_matakuliah } = req.body;

    // check if batas krs reached
    const krsLimit = await prisma.mahasiswa.findUniqueOrThrow({
      where: { id: id_mahasiswa },
      select: { semester: { select: { batasKrs: true } } },
    });

    const totalKrs = await prisma.mataKuliah_mhs.findMany({
      where: { mahasiswaId: id_mahasiswa, status: "off" },
      select: { mataKuliah: { select: { sks: true } } },
    });

    let krsSum = totalKrs.reduce((a, b) => a + b.mataKuliah.sks, 0);

    if (krsSum > krsLimit.semester.batasKrs) throw new Error("Krs limit is reached", { cause: 400 });

    // check if krs exists
    const krs = await prisma.mataKuliah_mhs.findFirst({
      where: {
        mahasiswaId: id_mahasiswa,
        mataKuliahId: id_matakuliah,
        status: "off",
      },
    });

    if (krs) throw new Error("KRS already exists", { cause: 400 });


    // make string from year function to get current year and next year
    let tahunAjar = `${new Date().getFullYear()}/${new Date().getFullYear() + 1
      }`;

    return await prisma.mataKuliah_mhs.create({
      data: {
        mahasiswaId: id_mahasiswa,
        mataKuliahId: id_matakuliah,
        tahunAjar,
      },
    });
  }

  static async delete(req: Request): Promise<string> {
    const { id_krs, id_mahasiswa } = req.query;

    // check if krs exists and id_mahasiswa is right
    await prisma.mataKuliah_mhs.findFirstOrThrow({
      where: {
        id: String(id_krs),
        mahasiswaId: String(id_mahasiswa),
        status: "off",
      },
    });

    await prisma.mataKuliah_mhs.delete({ where: { id: String(id_krs) } });
    return "Success to delete data krs"
  }

  static async getMkMhs(req: Request): Promise<[GetMkMhs[], Paging]> {
    const { id_mahasiswa } = req.params;
    const { current_page = 1, per_page = 10 } = req.query;
    const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
      where: { id: id_mahasiswa },
    });

    let status = await prisma.statusKrs.findFirstOrThrow({
      where: { active: true },
    });

    let [totalSemesterJurusanMk, semesterJurusanaMk] =
      await getMataKuliahKrsService(
        mahasiswa,
        status.status,
        Number(current_page),
        Number(per_page)
      );

    const paging = this.toPaging(String(current_page), String(per_page), totalSemesterJurusanMk)

    return [
      semesterJurusanaMk,
      {
        meta: paging,
      },
    ];
  }

  static toPaging(current_page: any, per_page: any, totalMhs: number) {
    return {
      current_page: current_page,
      last_page: Math.ceil(Number(totalMhs) / Number(per_page)),
      per_page: per_page,
      total: totalMhs,
    }
  }

  static async changeStatusPerUser(req: Request): Promise<boolean> {
    const { id_mahasiswa } = req.body;
    await prisma.mataKuliah_mhs.updateMany({
      where: {
        mahasiswaId: id_mahasiswa,
        status: "off",
      },
      data: {
        status: "on",
      },
    })
    return true;
  }

  static async changeStatusBatch(): Promise<boolean> {
    await prisma.mataKuliah_mhs.updateMany({
      where: {
        status: "off",
      },
      data: {
        status: "on",
      },
    });
    return true;
  }
}
