import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constant/userConstants";

export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { loading: true };
    case ADD_USER_SUCCESS:
      return { loading: false, userRes: action.payload };
    case ADD_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
      return { loading: true };
    case FETCH_ALL_USERS_SUCCESS:
      return { loading: false, allUsers: action.payload };
    case FETCH_ALL_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUsersByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
