import { PrismaClient } from "@prisma/client";

export default async (
  prisma: PrismaClient,
  jurusan: string,
  semester: string,
  mataKuliah: string
) => {
  const semester1 = await prisma.semesterJurusan_mk.create({
    data: {
      jurusanId: jurusan,
      semesterId: semester,
      mataKuliahId: mataKuliah,
    },
  });

  console.log(semester1);
  return semester1;
};
