import { FETCH_USERS, ADD_USER } from "./actionTypes";
import axios from "axios";

/* 
  - Actions are payloads of information that send data from your application to your store. 
  - They are the only source of information for the store. 
  - You send them to the store using store.dispatch().
  - Actions are plain JavaScript objects. 
  - Actions must have a type property that indicates the type of action being performed. 
*/

export const getUsers = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(results => {
      dispatch({
        type: FETCH_USERS,
        payload: results.data
      });
    })
    .catch(error =>
      console.error(`Something went really wrong: ${error.stack}`)
    );
};

export const addUser = user => dispatch => {
  axios
    .post("https://jsonplaceholder.typicode.com/users", user)
    .then(results => {
      dispatch({
        type: ADD_USER,
        payload: results.data
      });
    })
    .catch(error =>
      console.error(`Something went wrong when adding user: ${error.stack}`)
    );
};
