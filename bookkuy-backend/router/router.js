'use strict'
/**
 * initialization express
 */

const express = require('express');
const router = express.Router();

//panggil controller 
const { Controller } = require('../controller/Controller');

// book router
const { bookRouter } = require('./BookRouter');

// endpoint home
router.get('/', Controller.Homepage);

// endpoint book
router.use('/book', bookRouter);

// ekspor modul
module.exports = {router};