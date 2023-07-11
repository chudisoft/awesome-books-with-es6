import addBook from './addBook.js';
import Book, { bookStorageName, bookListElement } from './book.js';

const renderBookList = (bookList) => {
  const storedvalue = localStorage.getItem(bookStorageName);
  bookListElement.textContent = '';
  bookList = [];
  if (storedvalue !== null) {
    const newBookList = JSON.parse(storedvalue);
    newBookList.forEach((book) => {
      bookList.push(new Book(book.title, book.author));
    });
  }
  bookList.forEach((book) => {
    addBook(bookList, book);
  });
};

export default renderBookList;