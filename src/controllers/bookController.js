var bookController = function (bookService, nav) {
  var books = [
    {
      title: 'Harry Potter und der Stein der Weisen',
      author: 'J.K. Rowling',
      bookId: 25313807
    }, {
      title: 'Harry Potter und die Kammer des Schreckens',
      author: 'J.K. Rowling',
      bookId: 165225
    }
  ];

  var getIndex = function(request, response) {
    response.render('bookListView', {
      title: 'Books',
      nav: nav,
      books: books
    });
  };

  var getById = function(request, response) {
    var id = request.params.id;
    bookService.getBookById(books[id].bookId, function(err, book) {
      var result = books[id];
      result.book = book;

      response.render('bookView', {
        title: 'Books',
        nav: nav,
        book: result
      });
    });
  };

  return {
    getIndex: getIndex,
    getById: getById
  };
};

module.exports = bookController;

