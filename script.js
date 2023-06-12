let myLibrary = [];


function Book(book, author, bookStatus) {
    // will be used as a constructor
    this.book = book;
    this.author = author;
    this.bookStatus = bookStatus;

}

function addBookToLibrary (bookPropertiesArray) {
    myLibrary.push(new Book(...bookPropertiesArray));
}

const bookRegistration = document.querySelector("#book-form");
bookRegistration.addEventListener("submit", getBook);


function getBook (e) {
    e.preventDefault();
    
    const bookName = Array.from(document.querySelectorAll("#book-form input"));
    const bookPropertyArray = [];
    bookName.forEach((bookProperty) => {
        bookPropertyArray.push(bookProperty.value);
        
    })
    
    addBookToLibrary(bookPropertyArray);
    buildLibraryTableRow();
}

function buildLibraryTableRow () {
    let tableRow = "<tr><td></td><td></td><td></td></tr>";
    const getTableRow = document.getElementById("t-body")
    getTableRow.insertAdjacentHTML("beforeend", tableRow);
    console.log(getTableRow);
    
}