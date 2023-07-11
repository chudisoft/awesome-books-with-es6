import { bookListElement } from './book.js';
import removeBook from './removeBook.js';

const addBook = (bookList, book) => {
  const divBook = document.createElement('div');
  divBook.className = 'book';
  const titleHeader = document.createElement('label');
  titleHeader.className = 'title';
  titleHeader.textContent = `"${book.title}" by ${book.author}`;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'btn btn-remove';
  // removeBtn.book = book; //  store the book object as a property of the remove button
  removeBtn.addEventListener('click', () => {
    removeBook(bookList, book);
  });
  divBook.appendChild(titleHeader);
  divBook.appendChild(removeBtn);
  bookListElement.appendChild(divBook);
};

export default addBook;
