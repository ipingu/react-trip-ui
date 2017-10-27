import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {combineForms} from 'react-redux-form';

const configureStore = (initialState) => {

    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export default configureStore;
