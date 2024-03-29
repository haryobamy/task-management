import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';



import reducers from './reducers'


const initialState = {};

const middleware = [thunk];



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    
  );

const store = createStore( 
    reducers,
     initialState,
     enhancer
);

export default store;