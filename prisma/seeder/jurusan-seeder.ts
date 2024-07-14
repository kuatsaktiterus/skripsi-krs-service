import { PrismaClient } from "@prisma/client";

export default async (prisma: PrismaClient) => {
  const jurusan1 = await prisma.jurusan.upsert({
    where: { nama_jurusan: "Teknik Informatika" },
    update: {},
    create: {
      nama_jurusan: "Teknik Informatika",
    },
  });

  const jurusan2 = await prisma.jurusan.upsert({
    where: { nama_jurusan: "192442" },
    update: {},
    create: {
      nama_jurusan: "Sistem Informasi",
    },
  });
  console.log(jurusan1, jurusan2);
  return jurusan1;
};
