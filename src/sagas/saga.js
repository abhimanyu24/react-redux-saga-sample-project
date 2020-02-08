import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield put({ type: "AGE_UP_START" });
  yield delay(1000);
  yield put({ type: "AGE_UP_ASYNC", value: 10 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
