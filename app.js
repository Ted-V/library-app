// Store books
let myLibrary = [];

// Book constructor
class Book {
    constructor(title, author, status) {
        this.title = title
        this.author = author
        this.status = status
    };
}
// Add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Add book cards to DOM, delete button and completion toggle included
function displayBooks() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    };

    for (let i = 0; i < myLibrary.length; i++) {
        // Book div card
        const div = document.createElement('div');
        div.className = "book";
        div.dataset.index = i;
        div.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].status}`;

        // Options div
        const options = document.createElement('div');
        options.className = "book-options"

        // Book status button
        const statusBtn = document.createElement('button');
        statusBtn.className = "status-button";
        statusBtn.textContent = "Change Status"
        statusBtn.dataset.index = i;

        statusBtn.addEventListener("click", function updateStatus() {
            if (myLibrary[statusBtn.dataset.index].status == "Finished") {
                myLibrary[statusBtn.dataset.index].status = "Unfinished";
            } else {
                myLibrary[statusBtn.dataset.index].status = "Finished";
            }
            displayBooks();
        });

        // Book delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-button";
        deleteBtn.textContent = "Delete"
        deleteBtn.dataset.index = i;
        deleteBtn.addEventListener("click", function deleteBook() {
            if (deleteBtn.parentElement.parentElement.dataset.index == this.dataset.index) {
                // Remove book div from DOM
                this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
                // Remove book object from library
                myLibrary.splice(this.dataset.index, 1);
                console.log(myLibrary)
            }
        })

        container.appendChild(div);
        options.appendChild(statusBtn);
        options.appendChild(deleteBtn);
        div.appendChild(options);
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
    
    if (bookTitle !== '' && bookAuthor !== '') {
    addBookToLibrary(newBook);
    displayBooks(); 
    } else {
        alert("Please complete all fields.")
        clearFields();
    }
});

// clear fields 
function clearFields() {
    document.querySelector('#bookTitle').value = '';
    document.querySelector('#author').value = '';
}