import {
  ADD_TECH,
  DELETE_LOG,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
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

//* Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };

//! add update tech 

