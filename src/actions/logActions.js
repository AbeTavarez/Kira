import axios from "axios";
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

export const getLogs = () => async (dispatch) => {
  try {
    setLoading(); // set loading to true in the state
    const data = await axios.get("/logs");

    dispatch({
      type: GET_LOGS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addLog = (log) => async dispatch => {
    try {
        setLoading()
        const data = await axios.post('/logs', log);

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

//* set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};













//* =============== first version of get logs
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
