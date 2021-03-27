import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailMovieReducer from "./../../containers/home/DetailPage/modules/reducer";
import authReducer from "./../../containers/admin/Auth/modules/reducer";
import addUserReducer from "./../../containers/admin/AddUser/module/reducer";

const rootReducer = combineReducers({
  movieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer
});

export default rootReducer;
