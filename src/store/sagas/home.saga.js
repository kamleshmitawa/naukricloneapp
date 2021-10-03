import { call, put, takeEvery } from "redux-saga/effects";
import { axiosRequest } from "../../apis/axios.config";
// import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED } from "./type";

function* fetchUser(action) {
  const res = yield call(() =>
    axiosRequest(action.payload.url, action.payload.type)
  );
  if (res.data.body) {
    // yield put({ type: USER_FETCH_SUCCEEDED, payload: res.data.body });
  }
}

function* getUserList() {
//   yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

const homeSaga = {
  getUserList: getUserList(),
};

export default homeSaga;
