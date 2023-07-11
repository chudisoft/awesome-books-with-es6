const bookStorageName = 'booklist';
const booksSection = document.querySelector('#book-section');
const bookListElement = document.querySelector('#book-list');
const contBtn = document.querySelector('#contBtn');
const listBtn = document.querySelector('#listBtn');
const AddNewBtn = document.querySelector('#AddNewBtn');

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.newBookList = [];
  }
}

export {
  bookListElement, bookStorageName,
  contBtn, listBtn, AddNewBtn, booksSection,
};
