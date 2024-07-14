import { prisma } from "../lib/prisma-client";

export default async (
  mahasiswa: any,
  i: string,
  current_page: number,
  per_page: number
) => {
  let arraySemester = ["1", "3", "5", "7"];
  if (i === "genap") arraySemester = ["2", "4", "6", "8"];

  return await prisma.$transaction([
    prisma.semesterJurusan_mk.count({
      where: {
        jurusanId: mahasiswa.jurusanId,
        semester: {
          semester: { in: arraySemester },
        },
      },
    }),
    prisma.semesterJurusan_mk.findMany({
      skip: per_page * (current_page - 1),
      take: per_page,
      orderBy: { createdAt: "desc" },
      where: {
        jurusanId: mahasiswa.jurusanId,
        semester: {
          semester: { in: arraySemester },
        },
      },
      include: {
        mataKuliah: true,
      },
    }),
  ]);
};
