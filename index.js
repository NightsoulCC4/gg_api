const fastify = require('fastify')();
const connect = require('./connect');
const jwt = require('jsonwebtoken');
const config = require('./config/config');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

fastify.get('/token', async (request, reply) => {
    reply.send(
        {
            token: jwt.sign({ data: 'foobar' }, config.secret, { expiresIn: 72000 }),
            expire_time: 72000
        }
    );
});

fastify.post('/login', async (request, reply) => {

});

fastify.get('/users', async (request, reply) => {
    const users = await prisma.user.findMany();
    reply.send(users);
});


const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server is listening on port 3000');
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

start();