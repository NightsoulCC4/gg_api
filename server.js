const fastify = require('fastify')();

// Run the server
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
