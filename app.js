const myLibrary = [];

const container = document.querySelector('#container')

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const newBook = new Book('Theory of Moral Sentiments','Adam Smith', 494);
addBookToLibrary(newBook);
const newBook2 = new Book('Wealth of Nations', 'Adam Smith', 623);
addBookToLibrary(newBook2);

for (let i = 0; i < myLibrary.length; i++) {
    const bookElement = myLibrary[i];
    const bookDisplay = document.createElement('div');
    bookDisplay.setAttribute('id', i);
    bookDisplay.setAttribute('class', 'singleBook')
    bookDisplay.textContent = bookElement.title 
        + ' ' + bookElement.author
        + ' ' + bookElement.pages;
    container.appendChild(bookDisplay);
}