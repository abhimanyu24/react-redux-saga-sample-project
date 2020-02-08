import { delay } from "redux-saga";
import { takeLatest, put, select } from "redux-saga/effects";

const currentUserSelector = state => {
  return state.currentUser;
};
function* changeUserAsync(action) {
  yield put({ type: "CHANGE_USER_START" });
  console.log("action", action);
  yield delay(1000);
  const state = yield select(currentUserSelector);
  const fullState = yield select(state => state);
  console.log("fullState", fullState);
  console.log("state", state);
  // const response = yield call(api, { name: action.name });
  yield put({ type: "CHANGE_USER_SUCCESS", user: action.name });
}

export function* watchChangeUser() {
  yield takeLatest("CHANGE_USER", changeUserAsync);
}
