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

const deleteBookListener = document.getElementById("t-body");
deleteBookListener.addEventListener("click", deleteBook);


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
    let tableRow = `<tr class = "table-row"><td class = "book"></td><td class = "author"></td><td class = "bookStatus"></td><td><button class = "delete" >Delete</button></td></tr>`;
    const getTableRow = document.getElementById("t-body")
    getTableRow.insertAdjacentHTML("beforeend", tableRow);
    
    displayBook();
}

function displayBook () {
    for (i = 0; i < myLibrary.length; i++) {
         const getBookRow = document.querySelectorAll(".table-row").item(i).querySelectorAll("td");
                getBookRow[0].textContent = myLibrary[i].book;
                getBookRow[1].textContent = myLibrary[i].author;
                getBookRow[2].textContent = myLibrary[i].bookStatus;
                    // this can be further optimized by using spread operators and arrays

        }
}

function deleteBook(e) {
    if (e.target.className === "delete") {
        const getRowPath = e.composedPath();
        getRowPath[2].remove();

        // how to delete entry into myLibrary?
        // how can we get the value of the tr in terms of the parent element, e.g. t-body
            // if we can get this value, we can pass this value to myLibrary[value].splice
    }
    
}
        
    
    
    

    
    // need to create two for loops
        // 1. Deals with the getBookRow.item, will control what row we are on
        // 2. Deals with getBookInfo, will control what book we are in myLibrary
            // both will use length to go through the nodelist and array respectively
            // may to have create conditional in loops that check to see info has already been added
                // slap a class on it?
        
