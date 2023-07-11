import { bookStorageName } from './book.js';

const saveData = (bookList) => {
  const newBookList = [];
  bookList.forEach((book) => {
    newBookList.push({ title: book.title, author: book.author });
  });
  localStorage.setItem(bookStorageName, JSON.stringify(newBookList));
};

export default saveData;