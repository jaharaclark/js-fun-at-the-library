function shelfBook(book, bookCase) {
  if (bookCase.length <  3) {
  bookCase.unshift(book)
  }
}


function unshelfBook(name, bookCase) {
  for (var i = 0; i < bookCase.length; i++) {
    if (bookCase[i].title === name) {
      bookCase.splice(1, 1)
    }
  }
}


function listTitles(theseBooks) {
  var niceList = []
    for (var i = 0; i < theseBooks.length; i++) {
      niceList.push(theseBooks[i].title);
      }
    return niceList.join(', ')
  };


function searchShelf(library, bookName) {
  var hasBook = false;
  for (var i = 0; i < library.length; i++) {
    if (library[i].title === bookName) {
      hasBook = true
    }
  }
  return hasBook
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
