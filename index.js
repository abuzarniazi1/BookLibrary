const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// creating button
let addButton = document.createElement('button');
addButton.className = 'addButton';
addButton.textContent = 'Add Book';
document.querySelector('.header-container').appendChild(addButton);


let popupForm = document.getElementById('add-book-form')
addButton.addEventListener('click', function() {
    // Toggle the visibility of the popup form
    if (popupForm.style.display === 'none' || popupForm.style.display === '') {
        popupForm.style.display = 'block';
    } else {
        popupForm.style.display = 'none';
    }
});

document.getElementById('add-book-form').addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary()
    // Hide After Submission
    popupForm.style.display = 'none';
});

function addBookToLibrary() {
    let title = document.getElementById('book-name').value;
    let author = document.getElementById('author-name').value;
    let pages = parseInt(document.getElementById('pages').value);
    let read = document.getElementById('read-status').value;

    // Create a new object using the constructor function
    let newBook = new Book(title, author, pages, read);

    // Push the new book object into the array
    myLibrary.push(newBook);
    console.log("Book added successfully!");

    // Select the .libraryContainer div where you want to display book cards
    const libraryContainer = document.querySelector('.libraryContainer');

    // Create a new div for the book card
    const bookCard = document.createElement('div');
    bookCard.classList.add('BookCard');

    // Create and append paragraphs for book details
    const authorParagraph = document.createElement('p');
    authorParagraph.textContent = 'Author - ' + author;
    bookCard.appendChild(authorParagraph);

    const pagesParagraph = document.createElement('p');
    pagesParagraph.textContent = 'Pages - ' + pages;
    bookCard.appendChild(pagesParagraph);

    const statusParagraph = document.createElement('p');
    statusParagraph.textContent = 'Read - ' + read;
    bookCard.appendChild(statusParagraph);

    // Create and append remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Book';
    removeButton.classList.add('CardRemove');
    bookCard.appendChild(removeButton);

    // Append the book card to the library container
    libraryContainer.appendChild(bookCard);

    // Add event listener to the remove button
    removeButton.addEventListener('click', function(event) {
        // Get the parent book card element
        const bookCard = event.target.closest('.BookCard');
        // Remove the book card from the DOM
        bookCard.remove();
    });
}


document.getElementById('add-book-form').addEventListener('submit', function (event) {
    event.preventDefault();
 });

