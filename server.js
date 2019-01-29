const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


const {data} = require("./data.json");

app.get("/api/books-authors", (req, res) =>{
    res.send(data.books.map(book =>{
        /*return {
            ...book,
            authors: getBookAuthors(book)
        }*/
        return Object.assign({}, book, {
            authors: getBookAuthors(book)
        })
    }));
});

const getBookAuthors = (book) =>{
    const authorIds = book.authorId ? [book.authorId] : book.authorIds;
    return authorIds.map(authorId => data.authors[authorId]);
}

app.get("/api/books", (req, res) =>{
    res.send(data.books);
});

app.get("/api/authors", (req, res) =>{
    res.send(data.authors);
});

app.listen(8000, () =>{
    console.log("API server is at port 8000");
});