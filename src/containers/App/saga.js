import { eventChannel } from "redux-saga";
import { put, call, take, fork } from "redux-saga/effects";

//utils
import { auth } from "../../firebase";
import { setAuthUser } from "./actions";

function createChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error })
    );

    return unsubscribe;
  });

  return channel;
}

function* syncUser() {
  const channel = yield call(createChannel);
  while (true) {
    const { user } = yield take(channel);
    if (user !== null) {
      localStorage.setItem("authUser", user.uid);
    } else {
      localStorage.removeItem("authUser");
    }

    yield put(setAuthUser(user));
  }
}

function* appSaga() {
  yield fork(syncUser);
}

export default appSaga;
