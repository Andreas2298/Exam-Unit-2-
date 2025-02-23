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



//5. Return the isbn number of all the books for a given author.

function isbnFromAuthors(filename, bookAuthorName) {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);

  const isbnNumber = [];

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].bookAuthor.toLowerCase() === bookAuthorName.toLowerCase()) {
      isbnNumber.push(allBooks[i].isbnNumber);
    }
  }

  return isbnNumber;
}

const bookAuthorName = "Marcus Aurelius";
const isbnForAuthors = isbnFromAuthors("example_files/books.json", bookAuthorName);
console.log(
  ` The isbn number of the author ${bookAuthorName}: `,
  isbnForAuthors
);



//6. List books alphabetically assending or decendig

function alphabeticalListedBooks(filename, isBooksAscending = true) {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);

  const listLength = allBooks.length;

  for (let i = 0; i < listLength - 1; i++) {
    for (let j = 0; j < listLength - i - 1; j++) {
      let firstBook = allBooks[j].bookTitle.toLowerCase();
      let secondBook = allBooks[j + 1].bookTitle.toLowerCase();

      if (isBooksAscending) {
        if (firstBook > secondBook) {
          let temp = allBooks[j];
          allBooks[j] = allBooks[j + 1];
          allBooks[j + 1] = temp;
        }
      }
    }
  }

  return allBooks;
}
const booksAscending = alphabeticalListedBooks("example_files/books.json", true);
console.log(" In ascending order the books will be:", booksAscending);


//8. List books grouped by author first name. 

function groupAuthorsLastName() {
  const data = fs.readFileSync(filename, "utf-8");

  const allBooks = JSON.parse(data);

  booksGrouped = {};

  for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i];

    const authorName = book.author;
    let authorLastName = "";
    let isSpaceFound = false;

    for (let j = authorName.length - 1; j >= 0; j--) {
      if (authorName[j] === "" && !isSpaceFound) {
        isSpaceFound = true;
      }
    }
  }
}






