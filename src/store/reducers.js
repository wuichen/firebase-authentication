import { combineReducers } from "redux";
import sessionReducer from "./../containers/Session/reducer";
import userReducer from "./../containers/Home/reducer";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer
});

export default rootReducer;
