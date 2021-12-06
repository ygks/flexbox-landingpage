let library = [];

//Book constructor
function Book(title, author, pages, readen) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readen = readen;
  this.info = function info() {
    console.log(
      title +
        " " +
        "by" +
        " " +
        author +
        "," +
        " " +
        pages +
        " " +
        "Pages" +
        "," +
        " " +
        readen
    );
  };
}

//Pushing new books to library
function addBook(addTitle, addAuthor, addPages, addReaden) {
  library.push(new Book(addTitle, addAuthor, addPages, addReaden));
}
