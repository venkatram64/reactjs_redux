import React from "react";
import Book from "./book";
import Form from "./form";
import configureStore from "./../store";
import * as action from './../actions';

export default class BookList extends React.Component{
    
    constructor(props){
        super(props);
        this.store = configureStore();
        this.state = this.store.getState();
        this.deleteBook = this.deleteBook.bind(this);
        this.addBook = this.addBook.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = this.store.subscribe(() =>{
            this.setState(this.store.getState());
        });
        //action.fetchBooks(this.store.dispatch);
        this.store.dispatch(action.fetchBooks());
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    deleteBook(id){
        this.store.dispatch(action.deleteBook(id));
    }

    addBook(title, price){
        debugger;
        this.store.dispatch(action.addBook(title, price));
    }
    
    render(){
        return (
            <ul className="book-list">
                {this.state.books.map(book =>{
                    return (
                        <Book 
                        key={book.id} 
                        book={book}
                        deleteHandler={this.deleteBook}
                        />
                    );
                })}
                <Form addBookAction={this.addBook}/>
            </ul>
        );
    }

    render2(){
        return (
            <ul className="book-list">
                {this.state.books.map(book =>{
                    return (
                        <Book 
                        key={book.id} 
                        book={book}
                        author={this.state.authors[book.authorId]}
                        deleteHandler={this.deleteBook}
                        />
                    );
                })}
                <Form addBookAction={this.addBook}/>	
            </ul>
        );
    }

}