
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

import mainReducer from './reducers';

const configureStore = () => {
	return createStore(
        mainReducer,
       { books:[]},
       applyMiddleware(reduxPromise, logger)
    );
}

export default configureStore;