import {
  ADD_TODO,
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  SET_LOADING,
  LOGS_ERROR,
  GET_LOGS,
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  toDos: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
      };

    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
