import {
  ADD_TECH,
  DELETE_LOG,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
  DELETE_TECH
} from "./types";
import axios from 'axios'

//* Get techs from server
export const getTechs = () => async (dispatch) => {
    try {
      setLoading(); 
      const data = await axios.get("/techs");
  
      dispatch({
        type: GET_TECHS,
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };

//* Add a tech
export const addTech = (tech) => async (dispatch) => {
    try {
      setLoading(); 
      const data = await axios.post("/techs", tech);
  
      dispatch({
        type: ADD_TECH,
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
//* Delete a tech
  export const deleteTech = (id) => async (dispatch) => {
    try {
      setLoading(); 
      await axios.post("/techs", id);
  
      dispatch({
        type: DELETE_TECH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };

//* Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };

//! add update tech 

