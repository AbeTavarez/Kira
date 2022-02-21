import { ADD_TODO, GET_TODOS, UPDATE_TODO, DELETE_TODO } from "./types";
import axios from "axios";
// export const getToDos = () => {
//     // Redux Thunk allows us to return a function:
//     return async () => {
//         // first we fetch our data
//         const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         // then we dispatch an action with a type and a payload which is the new data.
//         dispatch({
//             type: GET_TODOS,
//             payload: data
//         })
//     }
// }
export const getToDos = () => async (dispatch) => {
  // Redux Thunk allows us to return a function:
  try {
    // first we fetch our data
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // then we dispatch an action with a type and a payload which is the new data.
    dispatch({
      type: GET_TODOS,
      payload: data,
    });
  } catch (err) {
      dispatch({
          type: TODO_ERROR,
          payload: err.response.data
      })
  }
};

import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

export const getLogs = () => async (dispatch) => {
  try {
    setLoading(); // set loading to true in the state
    const data = await axios.get("/logs");

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
//* first version
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();// set loading to true in the state
//         const data = await axios.get('/logs');

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }
// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
