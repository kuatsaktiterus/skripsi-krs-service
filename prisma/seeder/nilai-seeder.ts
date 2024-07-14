import { PrismaClient } from "@prisma/client";

export default async (prisma: PrismaClient) => {
  const nilai = await prisma.$transaction([
    prisma.nilai.upsert({
      where: { nilai: "A" },
      update: {},
      create: {
        nilai: "A",
        bobot: 4,
      },
    }),
    prisma.nilai.upsert({
      where: { nilai: "B" },
      update: {},
      create: {
        nilai: "B",
        bobot: 3,
      },
    }),
    prisma.nilai.upsert({
      where: { nilai: "C" },
      update: {},
      create: {
        nilai: "C",
        bobot: 2,
      },
    }),
    prisma.nilai.upsert({
      where: { nilai: "D" },
      update: {},
      create: {
        nilai: "D",
        bobot: 1,
      },
    }),
    prisma.nilai.upsert({
      where: { nilai: "E" },
      update: {},
      create: {
        nilai: "E",
        bobot: 0,
      },
    }),
  ]);

  console.log(nilai);
};
