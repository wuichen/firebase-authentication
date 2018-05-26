import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import { db, auth } from "../../firebase";
import { CREATE_USER } from "./constants";
import { createUserSuccess, createUserFailed } from "./actions";

function* handleCreateUser(action) {
  try {
    const { email, username, password } = action;
    const authUser = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );
    const ref = db.ref(`users/${authUser.id}`);
    yield call([ref, ref.set], {
      username,
      email
    });
    yield put(createUserSuccess());
  } catch (e) {
    console.log("error", e);
    yield put(createUserFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(CREATE_USER, handleCreateUser)]);
}

export default rootSaga;
