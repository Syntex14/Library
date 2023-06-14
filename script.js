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
    let tableRow = `<tr><td class = "book"></td><td class = "author"></td><td class = "bookStatus"></td></tr>`;
    const getTableRow = document.getElementById("t-body")
    getTableRow.insertAdjacentHTML("beforeend", tableRow);
    
    displayBook();
}

function displayBook () {
    const getBookRow = document.querySelectorAll("tr").item(1).querySelectorAll("td");
    const getBookName = myLibrary[0].book;
    const getBookAuthor = myLibrary[0].author;
    const getBookStatus = myLibrary[0].bookStatus;

    getBookRow[0].textContent = getBookName;
    getBookRow[1].textContent = getBookAuthor;
    getBookRow[2].textContent = getBookStatus;
    // need to create two for loops
        // 1. Deals with the getBookRow.item, will control what row we are on
        // 2. Deals with getBookInfo, will control what book we are in myLibrary
            // both will use length to go through the nodelist and array respectively
            // may to have create conditional in loops that check to see info has already been added
                // slap a class on it?
            
    console.log(getBookRow);
    
}