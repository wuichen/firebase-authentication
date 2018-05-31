import { combineReducers } from "redux";
import appReducer from "./../containers/App/reducer";
import homeReducer from "./../containers/Home/reducer";
import signInReducer from "./../containers/SignIn/reducer";
import signUpReducer from "./../containers/SignUp/reducer";
import resetPasswordReducer from "./../containers/ResetPassword/reducer";

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  resetPassword: resetPasswordReducer
});

export default rootReducer;
