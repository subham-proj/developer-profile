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
import axios from "axios";

export const addUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_USER_REQUEST,
    });

    const { data } = await axios.post("/api/users/", user);

    dispatch({
      type: ADD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_ALL_USERS_REQUEST,
    });

    const { data } = await axios.get("/api/users/");

    dispatch({
      type: FETCH_ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });

    const { data } = await axios.get(`/api/users/${id}`);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
