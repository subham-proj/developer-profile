import {
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAIL,
} from "../constant/userConstants";

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
