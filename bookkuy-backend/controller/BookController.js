'use strict'

/**
 * class decoration
 * write static method
 * module export
 */

class BookController {
    static FindAllBook(req, res) {
        res.send('Hello dari Book Controller');
    }
}

module.exports = {
    BookController
};