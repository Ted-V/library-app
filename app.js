// Store books
let myLibrary = ['The Odyssey by Homer, Unfinished'];
displayBooks();

// Book constructor
function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
};

// Add book to library
function addBookToLibrary(title, author, status) {
    let bookCard = `${title} by ${author}, ${status}`;
    myLibrary.push(bookCard);
}

function displayBooks() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    };

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.className = "book";
        div.textContent = myLibrary[i];
        container.appendChild(div);
    }
    clearFields();
}

// Get addBook button
var addBookButton = document.querySelector('.addBookButton');

addBookButton.addEventListener("click", function addNewBook() {
    // Get input values
    var bookTitle = document.querySelector('#bookTitle').value;
    var bookAuthor = document.querySelector('#author').value;
    var checkbox = document.querySelector('#readStatus');
    var read;

    if (checkbox.checked == true) {
        read = 'Finished';
    } else {
        read = 'Unfinished';
    }
    addBookToLibrary(bookTitle, bookAuthor, read)
    displayBooks();
});

// clear fields 
function clearFields() {
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#author').value = '';
}