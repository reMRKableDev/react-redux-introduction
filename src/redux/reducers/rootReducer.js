import { combineReducers } from "redux";
import userReducer from "./userReducer";

/* 
    - All combineReducers() does is generate a function that calls your reducers 
    with the slices of state selected according to their keys, 
    and combines their results into a single object again. 
    
    - Just like other reducers, combineReducers() does not create a new object if 
    all of the reducers provided to it do not change state.
*/
export default combineReducers({
  users: userReducer
});
