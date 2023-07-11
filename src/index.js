import {DateTime} from '../node_modules/luxon/src/luxon.js';
import Book from './modules/book.js';
import addBook from './modules/addBook.js';
import saveData from './modules/savebook.js';
import renderBookList from './modules/renderBookList.js';

const form = document.querySelector('form');
const contactUs = document.querySelector('.contactUs');
const booksSection = document.querySelector('#book-section');
const contBtn = document.querySelector('#contBtn');
const listBtn = document.querySelector('#listBtn');
const AddNewBtn = document.querySelector('#AddNewBtn');
const bookList = [];

function hideAll() {
  if (!contactUs.classList.contains('hidden')) { contactUs.classList.add('hidden'); }

  if (!booksSection.classList.contains('hidden')) { booksSection.classList.add('hidden'); }

  if (!form.classList.contains('hidden')) { form.classList.add('hidden'); }
}

hideAll();
booksSection.classList.toggle('hidden');

contBtn.addEventListener('click', () => {
  hideAll();
  contactUs.classList.toggle('hidden');
});

listBtn.addEventListener('click', () => {
  hideAll();
  booksSection.classList.toggle('hidden');
});

AddNewBtn.addEventListener('click', () => {
  hideAll();
  form.classList.toggle('hidden');
});

const currentDate = document.querySelector('.date');
setInterval(() => {
  const d = DateTime.now();
  currentDate.innerHTML = d.toLocaleString(DateTime.DATETIME_FULL);
}, 1000);

renderBookList(bookList);

//  add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const author = document.querySelector('#author').value.trim();
  if (title !== '' && author !== '') {
    const book = new Book(title, author);
    addBook(bookList, book);
    bookList.push(book);
    saveData(bookList);
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
});
