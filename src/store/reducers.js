import { combineReducers } from "redux";
import sessionReducer from "./../containers/Session/reducer";
import homeReducer from "./../containers/Home/reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  home: homeReducer
});

export default rootReducer;
