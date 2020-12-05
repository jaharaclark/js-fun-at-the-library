function createTitle(bookTitleHere) {
  return 'The ' + bookTitleHere
}


function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}



function saveReview(bookThoughts, reviews) {
  if (reviews.includes(bookThoughts)) {
    return reviews
  } else {
    reviews.push(bookThoughts)
  }
}


function calculatePageCount(nameOfBook) {
  return nameOfBook.length * 20
}


function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book;
}


function editBook(book) {
  book.pageCount *= .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
