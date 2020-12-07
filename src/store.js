import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';

const initialState = {

};

const middleware = [thunk, reduxPromise];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
    )
);

export default store;