import { combineReducers } from "redux";
import appReducer from "./../containers/App/reducer";
import homeReducer from "./../containers/Home/reducer";
import signUpReducer from "./../containers/SignUp/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  signUp: signUpReducer
});

export default rootReducer;
