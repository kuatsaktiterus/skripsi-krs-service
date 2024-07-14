import { PrismaClient } from "@prisma/client";

export default async (prisma: PrismaClient) => {
  const statusMhs = await prisma.statusMhs.upsert({
    where: { id: "1" },
    update: {},
    create: {
      status: "AKTIF",
    },
  });
  const statusMhs2 = await prisma.statusMhs.upsert({
    where: { id: "1" },
    update: {},
    create: {
      status: "CUTI",
    },
  });
  const statusMhs3 = await prisma.statusMhs.upsert({
    where: { id: "1" },
    update: {},
    create: {
      status: "LULUS",
    },
  });

  console.log(statusMhs, statusMhs2, statusMhs3);
  return statusMhs;
};
