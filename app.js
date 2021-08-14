// Store books
let myLibrary = [{title: 'The Odyssey', author: 'Homer', status: 'Unfinished'}];
displayBooks();

// Book constructor
function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
};

// Add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    };

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "X"
        div.className = "book";
        div.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].status}`;
        container.appendChild(div);
        div.appendChild(deleteBtn);
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
    let newBook = new Book(bookTitle, bookAuthor, read)
    addBookToLibrary(newBook);
    displayBooks();
});

// clear fields 
function clearFields() {
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#author').value = '';
}