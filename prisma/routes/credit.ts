const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const updateCredit = async (body: any) => {
  let decoded = jwt.verify(body?.token, config.secret);

  if (decoded.username === body?.username) {
    await prisma.user.update({
      where: {
        username: body?.username,
      },
      data: {
        credit: parseInt(body?.credit),
      },
    });

    return {
      status: "success",
      message: "update credit success.",
    };
  } else
    return {
      status: "failed",
      message: "Can't update credit.",
    };
};

export { updateCredit };
