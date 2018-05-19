import { all, fork } from "redux-saga/effects";
import signInSaga from "./../containers/SignIn/saga";
import navigationSaga from "./../containers/Navigation/saga";

export default function* rootSaga() {
  yield all([fork(signInSaga), fork(navigationSaga)]);
}
