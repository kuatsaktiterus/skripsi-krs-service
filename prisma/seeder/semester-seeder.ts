import { PrismaClient } from "@prisma/client";

export default async (prisma: PrismaClient) => {
  const semester1 = await prisma.semester.upsert({
    where: { semester: "1" },
    update: {},
    create: {
      semester: "1",
      batasKrs: 24,
    },
  });

  const semester2 = await prisma.semester.upsert({
    where: { semester: "Semester Pendek" },
    update: {},
    create: {
      semester: "Semester Pendek",
      batasKrs: 10,
    },
  });

  const semester3 = await prisma.semester.upsert({
    where: { semester: "2" },
    update: {},
    create: {
      semester: "2",
      batasKrs: 23,
    },
  });

  const semester4 = await prisma.semester.upsert({
    where: { semester: "3" },
    update: {},
    create: {
      semester: "3",
      batasKrs: 23,
    },
  });

  for (let i = 3; i < 14; i++) {
    await prisma.$transaction([
      prisma.semester.upsert({
        where: { semester: `${i + 1}` },
        update: {},
        create: {
          semester: `${i + 1}`,
          batasKrs: 21,
        },
      }),
    ]);
  }

  console.log(semester1, semester2, semester3, semester4);
  return semester1;
};
