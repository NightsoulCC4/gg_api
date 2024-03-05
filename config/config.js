const env = require('dotenv');

env.config();

module.export({
    "host": process.env.host
});