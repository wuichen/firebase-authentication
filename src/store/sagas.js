import { all, fork } from "redux-saga/effects";
import signInSaga from "./../containers/SignIn/saga";

export default function* rootSaga() {
  yield all([fork(signInSaga)]);
}
