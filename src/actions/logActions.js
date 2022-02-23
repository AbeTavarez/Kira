import axios from "axios";
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

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
//* =============== first version
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
