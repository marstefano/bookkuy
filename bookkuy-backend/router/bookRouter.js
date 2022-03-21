'use strict'

/**
 * initialization express
 */

const express = require('express');
const { BookController } = require('../controller/BookController');
const { Controller } = require('../controller/Controller');
const bookRouter = express.Router();

// endpoint home
bookRouter.get('/', Controller.Homepage);

// ekspor modul
module.exports = {bookRouter};