var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  }

  greetPatron(patron, isMorning){
    if (isMorning === true) {
      return `Good morning, ${patron}!`
    }
    return `Hello, ${patron}!`
  }

  findBook(bookName){
    for(var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if(this.library.shelves.fantasy[i].title === bookName) {
          this.library.shelves.fantasy.splice(i, 1)
          return `Yes, we have ${bookName}`
      }
    }

    for(var i = 0; i < this.library.shelves.fiction.length; i++) {
      if(this.library.shelves.ficton[i].title === bookName) {
        this.library.shelves.fiction.splice(i, 1)
        return `Yes, we have ${bookName}`
      }
    }

    for(var i = 0; i < this.library.shelves.nonFiction.length; i++) {
      if(this.library.shelves.nonFiction[i].title === bookName) {
        this.library.shelves.nonFiction.splice(i, 1)
        return `Yes, we have ${bookName}`
      }
    }
    return `Sorry, we do not have ${bookName}`
  }

  calculateLateFee(lateDays){
    var moniesOwed = Math.ceil(lateDays * .25)
    return moniesOwed
  }
}



module.exports = Librarian;
