import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  addUserReducer,
  getUsersByIdReducer,
  getUsersReducer,
} from "./reducer/userReducers.js";

const reducer = combineReducers({
  addUser: addUserReducer,
  users: getUsersReducer,
  userDetails: getUsersByIdReducer,
});

const initialState = {
  users: { allUsers: [] },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
