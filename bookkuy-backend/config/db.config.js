'use strict'

require('dotenv').config();

module.exports = {
    PORT : process.env.PORT,
    HOST : process.env.HOST,
    USER : process.env.USER,
    DB : process.env.DB
};