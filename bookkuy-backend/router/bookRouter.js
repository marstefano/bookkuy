'use strict'

/**
 * initialization express
 */

const express = require('express');
const { BookController } = require('../controller/BookController');
const bookRouter = express.Router();

// endpoint home
bookRouter.get('/', BookController.getAllBooks);

bookRouter.get('/:id', BookController.FindBookById);

// endpoint book by id
bookRouter.post('/:id', BookController.addNewbooks)

// Endpoint : Post Book
bookRouter.post('/post', BookController.AddNewBook);

// ekspor modul
module.exports = {bookRouter};