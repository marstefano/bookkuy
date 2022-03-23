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
                 res.json({
                     title : "API Backend bookkuy",
                     message : "Koleksi Buku",
                     status :200,
                     data
                 })
             }
         })
     }

     static FindBookById(req, res) {
        // console.log('ini id', req.params.id)
         const {id} = req.params;
         Book.showBookById(id, (err, data) => {
             if (err) {
                 console.log(err);
             } else {
                res.json({
                    title : "API Backend bookkuy",
                    message : "Koleksi Buku",
                    status :200,
                    data
                })
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