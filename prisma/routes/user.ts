const bcrypt = require("bcrypt");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = async (body: any) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(body.password, salt);

  try {
    await prisma.user_info.create({
      data: {
        firstname: body?.firstname,
        lastname: body?.lastname,
        tel: body?.tel,
        address: body?.address,
        address_2: body?.address_2,
      },
    });

    const user_info_id = await prisma.user_info.findMany({
      where: {
        firstname: {
          in: [body?.firstname],
        },
      },
    });

    await prisma.bank_account.create({
      data: {
        bank_no: body?.bank_no,
        bank_type: parseInt(body?.bank_type),
        user_info_id: user_info_id[0]?.id_user_info,
      },
    });

    await prisma.user.create({
      data: {
        username: body?.username,
        password: hash,
        user_info_id: user_info_id[0]?.id_user_info,
      },
    });

    return {
      status: "success",
      message: "Create user success.",
    };
  } catch (exception) {
    return {
      error: exception,
    };
  }
};

const login = async (body: any) => {};

export { register, login };
