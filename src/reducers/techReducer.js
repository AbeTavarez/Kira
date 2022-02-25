import {
  ADD_TECH,
  DELETE_LOG,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
