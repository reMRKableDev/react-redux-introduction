import { FETCH_USERS } from "./actionTypes";
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
