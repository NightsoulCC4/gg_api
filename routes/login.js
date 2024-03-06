const fastify = require('fastify')();
const connect = require('../connect');

fastify.get('/token', async (request, reply) => {
    return reply.send({ "msg": "Hello" });
});

module.exports = fastify;