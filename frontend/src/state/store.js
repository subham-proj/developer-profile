import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getUsersReducer } from "./reducer/userReducers.js";

const reducer = combineReducers({
  users: getUsersReducer,
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
