const env = require('dotenv');

env.config();

module.exports = {
    "host": process.env.HOST,
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "port": process.env.PORT,
    "database": process.env.DATABASE,
    "secret": process.env.SECRET,
    "database_url": process.env.DATABASE_URL
};