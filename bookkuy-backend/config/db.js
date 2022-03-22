'use strict'

const mysql = require('mysql');

const DBConfig = require('./db.config');

const connectDB = mysql.createConnection({
    host: DBConfig.HOSTt,
    user: DBConfig.USER,
    database: DBConfig.DB
});


connectDB.connect((err ) => {
    if (err) throw err;
    console.log('Connected succes to database');
})

module.exports = connectDB;