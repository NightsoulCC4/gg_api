const fastify = require("fastify")();
import { FastifyRequest, FastifyReply } from "fastify";
const jwt = require("jsonwebtoken");
const config = require("./config/config");
const { PrismaClient } = require("@prisma/client");

import { register, login } from "./prisma/routes/user";

const prisma = new PrismaClient();

fastify.register(require("@fastify/formbody"));

interface TokenResponseBody {
  token: string;
  expire_time: string;
}

fastify.get("/token", async (request: any, reply: FastifyReply) => {
  const token = jwt.sign({ data: "foobar" }, config.secret, {
    expiresIn: 72000,
  });
  const expireTime = "3 days";

  const responseBody: TokenResponseBody = {
    token,
    expire_time: expireTime,
  };

  reply.send(responseBody);
});

fastify.post("/register", async (request: any, reply: FastifyReply) => {
  const body: FastifyRequest = request.body;
  const result = await register(body);

  reply.send(result);
});

fastify.post("/login", async (request: any, reply: FastifyReply) => {});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server is listening on port 3000");
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

start();
