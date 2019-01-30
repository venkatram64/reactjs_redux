
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

export const deleteBook = bookId =>{
	return fetch(`http://localhost:8000/api/books/${bookId}`,{
		method: 'DELETE',
		headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({})
	}).then(response => response.json())
		.then(ok => {
			return {
				type: 'DELETE_BOOK',
				bookId
			};
		});
}

export const addBook = (title, price) => {
    return fetch("http://localhost:8000/api/books", {
      method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         title,
         price
       })
    }).then(response => {
      if(response.ok){
        return response.json();  
      }else{
        throw new Error("Something went wrong with fetch...");
      }
    }).then(newBook => {
        return {
          type: 'ADD_BOOK',
          newBook
        };
      });
  };

  /*export const addBook = (title, price) => {
    return fetch("http://localhost:8000/api/books", {
      method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         title,
         price
       })
    }).then(response => response.json())
      .then(newBook => {
        return {
          type: 'ADD_BOOK',
          newBook
        };
      });
  };*/

/*export const fetchBooks = (dispatch) => {
	fetch("http://localhost:8000/api/books-authors")
        .then(response => response.json())
        .then(books =>{
            dispatch(receiveBooks(books))
        });
}*/