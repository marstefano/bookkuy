'use strict'

const mysql = require('mysql');

const DBConfig = require('../db.config');
const { DB } = require('./db.config');

const connectDB = mysql.createConnection({
    host: DBConfig.host,
    user: DBConfig.user,
    password: DBConfig.password,
    database: DBConfig.DB
});


connectDB.connect((ERR ) => {
    if (err) throw err;
    console.log('Connected succes to database');
})

module.exports = connectDB;