import { bookListElement } from './book.js';
import saveData from './savebook.js';

const removeBook = (bookList, book) => {
  const index = bookList.indexOf(book);
  bookList = bookList.filter((_book) => _book !== book);
  saveData(bookList);
  bookListElement.removeChild(bookListElement.childNodes[index]);
};

export default removeBook;