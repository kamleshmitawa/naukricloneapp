import { call, put, takeEvery } from "redux-saga/effects";
import { axiosRequest } from "../../apis/axios.config";
import { routePath } from "../../routes/routePath";
import {
  GET_POSTED_JOB,
  POSTED_JOB_LOADER,
  POST_JOB,
  POST_JOB_LOADER,
  SAVE_POSTED_JOB,
  SAVE_POSTED_JOB_ERROR,
  SAVE_POST_JOB,
  SAVE_POST_JOB_ERROR,
} from "../types/jobs.type";

function* jobPost(action) {
  const { url, type, data, history } = action.payload;
  yield put({ type: POST_JOB_LOADER, payload: true });
  try {
    const res = yield call(() => axiosRequest(url, type, history, data));
    if (res) {
      yield put({ type: SAVE_POST_JOB, payload: res });
      history.push(routePath.jobsPosted);
    }
  } catch (err) {
    yield put({ type: SAVE_POST_JOB_ERROR, payload: err.message });
    yield put({ type: POST_JOB_LOADER, payload: false });
  }
}

function* postJob() {
  yield takeEvery(POST_JOB, jobPost);
}


function* getJobsPosted(action) {
  const { url, type, history } = action.payload;
  yield put({ type: POSTED_JOB_LOADER, payload: true });
  try {
    const res = yield call(() => axiosRequest(url, type,history));
    if (res) {
      yield put({ type: SAVE_POSTED_JOB, payload: res });
      history.push(routePath.jobsPosted);
    }
  } catch (err) {
    yield put({ type: SAVE_POSTED_JOB, payload: [] });
    yield put({ type: POSTED_JOB_LOADER, payload: false });
  }
}

function* getPostedJob() {
  yield takeEvery(GET_POSTED_JOB, getJobsPosted);
}

const jobSaga = {
  postJob: postJob(),
  getPostedJob: getPostedJob(),
};

export default jobSaga;
