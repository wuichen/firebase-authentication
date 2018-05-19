import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import firebase, { auth } from "../../firebase";
import { SIGN_IN_WITH_GOOGLE, SIGN_IN_WITH_FACEBOOK } from "./constants";
import {
  signInWithGoogleSuccess,
  signInWithGoogleFailed,
  signInWithFacebookSuccess,
  signInWithFacebookFailed
} from "./actions";

function* handleSignInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = yield call([auth, auth.signInWithPopup], provider);
    yield put(signInWithGoogleSuccess(result.user));
  } catch (e) {
    yield put(signInWithGoogleFailed(e));
  }
}

function* handleSignInWithFacebook() {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = yield call([auth, auth.signInWithPopup], provider);
    yield put(signInWithFacebookSuccess(result.user));
  } catch (e) {
    yield put(signInWithFacebookFailed(e));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN_WITH_GOOGLE, handleSignInWithGoogle),
    takeLatest(SIGN_IN_WITH_FACEBOOK, handleSignInWithFacebook)
  ]);
}

export default rootSaga;
