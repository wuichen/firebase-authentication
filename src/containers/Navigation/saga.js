import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import { auth } from "../../firebase";
import { SIGN_OUT } from "./constants";
import { signOutSuccess, signOutFailed } from "./actions";

function* handleSignOut() {
  try {
    yield call([auth, auth.signOut]);
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(SIGN_OUT, handleSignOut)]);
}

export default rootSaga;
