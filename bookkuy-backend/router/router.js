'use strict'

/**
 * initialization express
 */

const express = require('express');
const { BookController } = require('../controller/BookController');
const { Controller } = require('../controller/Controller');
const router = express.Router();

// book router
const {bookRouter} = require('./BookRouter');

// endpoint home
router.get('/', BookController.FindAllBook);

// endpoint book
router.use('/book', bookRouter);

// ekspor modul
module.exports = {router};