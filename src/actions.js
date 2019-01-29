
export const receiveBooks = (books) => ({
	type: 'RECEIVE_BOOKS',
	books
});

export const fetchBooks = () => {
	return fetch("http://localhost:8000/api/books-authors")
        .then(response => response.json())
        .then(books =>{
            return receiveBooks(books)
        });
}

/*export const fetchBooks = (dispatch) => {
	fetch("http://localhost:8000/api/books-authors")
        .then(response => response.json())
        .then(books =>{
            dispatch(receiveBooks(books))
        });
}*/