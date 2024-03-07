const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const register = async (body: any) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(body?.password, salt);

  let bank_type;

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

    if (body?.bank_type == "Kasikorn") bank_type = 1;
    else if (body?.bank_type == "Krungsri") bank_type = 2;

    const user_info_id = await prisma.user_info.findFirst({
      where: {
        firstname: body?.firstname,
      },
    });

    await prisma.bank_account.create({
      data: {
        bank_no: body?.bank_no,
        bank_type: bank_type,
        user_info_id: user_info_id?.id_user_info,
      },
    });

    await prisma.user.create({
      data: {
        username: body?.username,
        password: hash,
        user_info_id: user_info_id?.id_user_info,
        credit: 0,
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

const login = async (body: any) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        username: {
          in: [body?.username],
        },
      },
    });

    if (bcrypt.compareSync(body.password, user[0].password)) {
      const user_info = await prisma.user_info.findMany({
        where: {
          id_user_info: {
            in: [user[0]?.user_info_id],
          },
        },
      });

      const bank_account = await prisma.bank_account.findMany({
        where: {
          user_info_id: {
            in: [user[0]?.user_info_id],
          },
        },
      });

      const bank_name = await prisma.bank_name.findMany({
        where: {
          bank_name_id: {
            in: [bank_account[0]?.bank_type],
          },
        },
      });

      const token = jwt.sign({ username: user[0].username }, config.secret, {
        expiresIn: 72000,
      });

      return {
        status: "success",
        message: "Get data success.",
        data: {
          user: user,
          user_info: user_info,
          bank_account: bank_account,
          bank_name: bank_name,
          token: token,
        },
      };
    } else
      return {
        status: "failed",
        error: "Password incorrect.",
      };
  } catch (exception) {
    return {
      error: exception,
    };
  }
};

export { register, login };
