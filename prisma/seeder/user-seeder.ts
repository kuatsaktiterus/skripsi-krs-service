import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

export default async (
  prisma: PrismaClient,
  jurusan: string,
  status: string,
  semester: string
) => {
  let hash = await bcryptjs.hash("12345678", 8);
  let hash2 = await bcryptjs.hash("192442", 8);
  const user1 = await prisma.user.upsert({
    where: { username: "ricky" },
    update: {},
    create: {
      id: "e8b4ecc4-0454-4bdf-b22c-d32483ffacf1",
      username: "ricky",
      password: hash,
      role: "ADMIN",
      Admin: {
        create: {
          username: "ricky",
        },
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: "192442" },
    update: {},
    create: {
      id: "1f08741d-f446-4e19-b368-f12d1246a35a",
      username: "192442",
      password: hash2,
      role: "USER",
      Mahasiswa: {
        create: {
          nim: "192442",
          nama: "Ricky",
          email: "r@r.com",
          jurusanId: jurusan,
          statusId: status,
          semesterId: semester,
          statusPembayaranSemester: true,
        },
      },
    },
    include: {
      Mahasiswa: true,
    },
  });
  console.log(user1, user2);

  return user2;
};
