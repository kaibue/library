const myLibrary = [];

const container = document.querySelector('#container');
const btnAddBook = document.querySelector('#btnAddBook');
const dialog = document.querySelector('#dialog1');

btnAddBook.addEventListener('click',() => dialog.showModal());


function Book(title, author, pages, checkRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.checkRead = checkRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const newBook = new Book('Theory of Moral Sentiments','Adam Smith', 494, true);
addBookToLibrary(newBook);
const newBook2 = new Book('Wealth of Nations', 'Adam Smith', 623, false);
addBookToLibrary(newBook2);

for (let i = 0; i < myLibrary.length; i++) {
    const bookElement = myLibrary[i];
    const bookDisplay = document.createElement('div');
    const checkBox = document.createElement('INPUT');
    checkBox.setAttribute('class' , 'checkBox')
    checkBox.setAttribute("type", 'checkbox');
    bookElement.checkRead == true ? checkBox.checked = true : checkBox.checked = false;

    bookDisplay.setAttribute('id', i);
    bookDisplay.setAttribute('class', 'singleBook')
    bookDisplay.textContent = bookElement.title 
        + ' ' + bookElement.author
        + ' ' + bookElement.pages;

    bookDisplay.appendChild(checkBox);
    container.appendChild(bookDisplay);
}

const inputSubmitted = document.querySelector('#submitInputs');
inputSubmitted.addEventListener('click', () => getBookAndAdd());


function getBookAndAdd() {
    const bookNameInput = document.querySelector('#bookNameInput').value;
    const bookAuthorInput = document.querySelector('#bookAuthorInput').value;
    const bookPagesInput = document.querySelector('#bookPagesInput').value;
    const bookReadInput = document.querySelector('#bookReadInput');
    bookReadInput.checked == true ? bookReadInput = true : bookReadInput = false;
    const bookToAdd = new Book(bookNameInput, bookAuthorInput, bookPagesInput, bookReadInput);
    console.log(bookToAdd);
    addBookToLibrary(bookToAdd);
    dialog.close();
}

