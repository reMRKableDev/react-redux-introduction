/* 
    - Reducers specify how the application's state changes in response to actions 
      sent to the store. 
    - Remember that actions only describe what happened,
      but don't describe how the application's state changes.
*/
import { FETCH_USERS, ADD_USER } from "../actions/actionTypes";

/* 
    In Redux, all the application state is stored as a single object.
*/
const initialState = {
  items: [],
  item: {}
};

/* 
    - Once the state is established, we're ready to write a reducer for it. 
    - The reducer is a pure function that takes the previous state and an action, 
      and returns the next state.
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
