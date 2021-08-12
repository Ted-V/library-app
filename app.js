// Store books
let myLibrary = [{
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoyevsky',
    pages: 522,
    status: 'Incomplete'
},
{
    title: 'Candide',
    author: 'Voltaire',
    pages: 130,
    status: 'Incomplete'
}];

// Book constructor
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
};

// Add book to library
function addBookToLibrary() {
    let newBook = new Book(title, author, pages, status);
    let bookCard = `${newBook.title} by ${newBook.author}, 
    ${newBook.pages} p., ${newBook.status}`;
    myLibrary.push(bookCard);
}

function displayBooks() {
    
}

// get container and store in var, create a var for each card (a div),
// for each book, append a div to container, make the text content the book info

