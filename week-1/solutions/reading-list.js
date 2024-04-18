/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */
let readBook = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: false
    },
    {
        title: "1984",
        author: "George Orwell",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: false
    }
];
function book(){
    for(let i of readBook){
       if (i.alreadyRead){
  console.log(`you already read`);
       }else{console.log(` you still read`);}
    }
}
book();