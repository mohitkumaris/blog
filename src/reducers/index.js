import { combineReducers } from "redux";
import deleteUserReducer from "./deleteReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  posts: postsReducer,
  users: userReducer,
  delete: deleteUserReducer,
});
