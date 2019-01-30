const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let {data} = require("./data.json");

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
    if(book.authorId !== undefined){
        const authorIds = book.authorId ? [book.authorId] : book.authorIds;
        return authorIds.map(authorId => data.authors[authorId]);
    }else{
        return {};
    }
}

app.delete('/api/books/:bookId', (req, res) =>{
	data.books = data.books.filter(book =>
		book.id !== req.params.bookId
    );
    res.send({deleted: true});
});

app.post('/api/books', (req, res) => {
    console.dir(req.body);
    const newBook = {
      id: Date.now(),
      title: req.body.title,
      price: req.body.price,
      authors: []
    };
    data.books.push(newBook);
    res.send(newBook);
  });

app.get("/api/books", (req, res) =>{
    res.send(data.books);
});

app.get("/api/authors", (req, res) =>{
    res.send(data.authors);
});

app.listen(8000, () =>{
    console.log("API server is at port 8000");
});