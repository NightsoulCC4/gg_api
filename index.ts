const fastify = require("fastify")();
import { FastifyRequest, FastifyReply } from "fastify";
import { register, login } from "./prisma/routes/user";
import { updateCredit } from "./prisma/routes/credit";

fastify.register(require("@fastify/formbody"));
fastify.register(require("@fastify/cors"), {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

fastify.post("/register", async (request: any, reply: FastifyReply) => {
  const body: FastifyRequest = request.body;
  const result = await register(body);

  reply.send(result);
});

fastify.post("/login", async (request: any, reply: FastifyReply) => {
  const body: FastifyRequest = request.body;
  const result = await login(body);

  reply.send(result);
});

fastify.post("/updateCredit", async (request: any, reply: FastifyReply) => {
  const body: FastifyRequest = request.body;
  const result = await updateCredit(body);

  reply.send(result);
});

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
