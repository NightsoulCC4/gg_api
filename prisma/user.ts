const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = async (body: any) => {
  await prisma.user.create({
    data: {
      username: body.username,
    },
  });
};

export { register };
