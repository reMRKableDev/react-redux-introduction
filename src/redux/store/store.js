/* 
    The Store is the object that brings everything together. 
    The store has the following responsibilities:

    - Holds application state;
    - Allows access to state via getState();
    - Allows state to be updated via dispatch(action);
*/

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

/* 
    Initial state of application representation 
*/
const initialState = {};

/* 
    Setting up thunk middleware which allows to write action creators that return a function 
    instead of an action. The thunk can be used to delay the dispatch of an action, 
    or to dispatch only if a certain condition is met. 
*/
const middleware = [thunk];

/* 
    The Redux store holds the state of the whole application. 
    All state changes now go through this store instead of being passed 
    between components directly.

    The store is exported so that it can be accessed in our index.js
*/
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
