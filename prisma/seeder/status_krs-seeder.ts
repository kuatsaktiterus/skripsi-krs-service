import { PrismaClient } from "@prisma/client";

export default async (prisma: PrismaClient) => {
  const statusKrs = await prisma.statusKrs.upsert({
    where: { status: "genap" },
    update: {},
    create: {
      status: "genap",
    },
  });
  const statusKrs2 = await prisma.statusKrs.upsert({
    where: { status: "ganjil" },
    update: {},
    create: {
      status: "ganjil",
      active: true,
    },
  });
  const statusKrs3 = await prisma.statusKrs.upsert({
    where: { status: "pendek" },
    update: {},
    create: {
      status: "pendek",
    },
  });
  const statusKrs4 = await prisma.statusKrs.upsert({
    where: { status: "off" },
    update: {},
    create: {
      status: "off",
    },
  });

  console.log(statusKrs, statusKrs2, statusKrs3, statusKrs4);
};
