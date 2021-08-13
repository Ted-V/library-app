// Store books
let myLibrary = ["Crime and Punishment by Dostoyevsky, 522 p., Incomplete", 
"Candide by Voltaire, 130 p., Incomplete", 
"Fear and Trembling, SK, 150 p., Incomplete"
];


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
    const container = document.querySelector('.container');

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.className = "book";
        div.textContent = myLibrary[i];
        container.appendChild(div);
    }
}

displayBooks();


