import axios from "axios";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

//* Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

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
      payload: err.response.statusText,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const data = await axios.post("/logs", log);

    dispatch({
      type: ADD_LOG,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await axios.delete(`/logs/${id}`);

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

//* Set current log - This is not async
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//* Clear current log - This is not async
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const data = await axios.put(`/logs/${log.id}`, log);

    dispatch({
      type: UPDATE_LOG,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    // we're hitting an endpoint in the backend that will perform the search
    const data = await axios.get(`/logs?q=${text}`);

    dispatch({
      type: SEARCH_LOGS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
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
