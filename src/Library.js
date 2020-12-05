function createLibrary(name, shelves) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
}


function addBook(shelfType, bookName) {
  var nameObj = bookName.genre
  var bookObj = shelfType.shelves[nameObj];
  shelfType.shelves[nameObj].push(bookName);
}


function checkoutBook(libraryName, bookName) {
// console.log(libraryName.length, "string")
for (key in libraryName.shelves) {
  for (var i = 0; i < libraryName.shelves[key].length; i++) {
    // console.log(libraryName.shelves[key][i].title, "happy")
    if (libraryName.shelves[key][i].title === bookName) {
      libraryName.shelves[key].splice(i, 1)
      // console.log(libraryName.shelves[key].includes(bookName))
      return `You have now checked out ${bookName} from the ${libraryName.name}`
      }
    }
  }
    return `Sorry, there are currently no copies of ${bookName} available at the ${libraryName.name}`
};


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
