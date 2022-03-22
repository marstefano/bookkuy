'use strict'

/**
 * class decoration
 * write static method
 * module export
 */


 const {Book} = require('../model/Book');

 class BookController {
     static getAllBooks (req, res) {
         Book.selectAllBooks ((err, data) => {
             if (err) {
                 console.log('Error', err)
             } else {
                 console.log('data', data);
             }
         })
     }
     static getBooksById (req,res) {
         res.res();
     }
 
     static addNewbooks (req,res) {
         res.send()
     }
 
     static updateBook (req,res) {
         res.send()
     }
 
     static deleteBook (req,res) {
         res.send()
     }
 }

module.exports = {
    BookController
};