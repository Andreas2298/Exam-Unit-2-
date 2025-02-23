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



//2. Write a function that return only books written by authors with a t in their name

function getAuthorsWithTInTheirName(filename) {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);

  const booksResult = [];

  for (let i = 0; i < allBooks.length; i++) {
    const authorName = allBooks[i].author.toLowerCase();

    if (authorName.includes("t")) {
      booksResult.push(allBooks[i]);
    }
  }

  return booksResult;
}

const authorsWithTInTheirName = getAuthorsWithTInTheirName("example_files/books.json");
console.log(authorsWithTInTheirName);



//3. The number of books written after 1992

function booksWrittenAfter1992(filename) {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);

  let bookCount = 0;

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].published_year > 1992) {
      bookCount++;
    }
  }

  return bookCount;
}

const booksAfter1992 = booksWrittenAfter1992("books.json");
console.log(booksAfter1992);


//4. The number of books written before 2004

function countBooksBefore2004(filename) {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);

  let bookCount = 0;

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].published_year < 2004) {
      bookCount++;
    }
  }

  return bookCount;
}

const booksBefore2004 = countBooksBefore2004("example_files/books.json");
console.log(
  " The total number of books written before the year 2004 is: ",
  booksBefore2004
);
