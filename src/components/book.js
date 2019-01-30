import React from "react";
import Author from "./author";

const Book = ({book,author, deleteHandler}) =>{

    const handleClick = (event) =>{
        event.preventDefault();
        deleteHandler(book.id);    
    }

    const formatPrice = (priceInCents) =>{
        //debugger;
        if(priceInCents === undefined){
            return '';
        }
        return `$ ${(priceInCents/100).toFixed(2)}`;
    }

    return(
        <li className="book">
            <div className="title">
                {book.title}
            </div>
            {book.authors.length?book.authors.map(author => <Author {...author} />) : ""}
            <div className="price">
                {formatPrice(book.price)}
            </div>
            <a href="#" className="delete" onClick={handleClick}>
                delete
            </a>
        </li>
    );
}

export default Book;


