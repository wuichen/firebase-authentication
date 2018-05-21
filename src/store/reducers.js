import { combineReducers } from "redux";
import appReducer from "./../containers/App/reducer";
import homeReducer from "./../containers/Home/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer
});

export default rootReducer;
