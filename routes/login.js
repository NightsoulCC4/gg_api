// Import Fastify
const fastify = require('fastify')();

fastify.get('/token', async (request, reply) => {
    return reply.send({ "msg": "Hello" });
});