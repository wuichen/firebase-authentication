import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import { db } from "../../firebase";
import { CREATE_USER } from "./constants";
import { createUserSuccess, createUserFailed } from "./actions";

function* handleCreateUser({ id, username, email }) {
  try {
    const ref = db.ref(`users/${id}`);
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
