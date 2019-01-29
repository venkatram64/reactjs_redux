
const mainReducer = (state = {}, action) => {
	switch(action.type){

        case 'RECEIVE_BOOKS':
            return Object.assign({}, state, {
                books: action.books
            });
            
		default:
			return state;
	}
};

export default mainReducer;