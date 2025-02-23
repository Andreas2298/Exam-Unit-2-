/ Task 4 : My books they are a mess.

// 1. Write a function that return only books starting with The

const fs = require("fs");

function fetchBooksStaringWithThe(filename) {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);
  const booksResult = [];

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].title.startsWith("The")) {
      booksResult.push(allBooks[i]);
    }
  }

  return booksResult;
}

const filteredBooks = fetchBooksStaringWithThe("example_files/books.json");
console.log(filteredBooks);
