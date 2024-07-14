import { PrismaClient } from "@prisma/client";

export default async (prisma: PrismaClient) => {
  const mk1 = await prisma.mataKuliah.upsert({
    where: { kode_mk: "45TTB" },
    update: {},
    create: {
      nama_mk: "Kerja Praktik (45TTB)",
      kode_mk: "45TTB",
      sks: 4,
    },
  });

  const mk2 = await prisma.mataKuliah.upsert({
    where: { kode_mk: "19MMKB" },
    update: {},
    create: {
      nama_mk: "Kerja Nyata (19MMKB)",
      kode_mk: "19MMKB",
      sks: 2,
    },
  });
  console.log(mk1, mk2);
  return mk1;
};
