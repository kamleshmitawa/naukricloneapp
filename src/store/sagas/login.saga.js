import { call, put, takeEvery } from "redux-saga/effects";
import { axiosRequest } from "../../apis/axios.config";
import {
  USER_LOGIN,
  SAVE_USER_LOGIN,
  LOGIN_LOADER,
  FORGOT_PASSWORD,
  USER_SIGNUP,
  SIGNUP_LOADER,
  SAVE_USER_SIGNUP,
  SAVE_FORGOT_PASSWORD,
  SAVE_FORGOT_PASSWORD_ERROR,
  SAVE_USER_LOGIN_ERROR,
  SAVE_USER_SIGNUP_ERROR,
  SAVE_RESET_PASSWORD,
  SAVE_RESET_PASSWORD_ERROR,
  RESET_PASSWORD,
} from "../types/login.type";
import { getLocalStorage, setLocalStorage } from "../../utils/utils";
import { routePath } from "../../routes/routePath";

function* userLogin(action) {
  const { url, type, data, history } = action.payload;
  yield put({ type: LOGIN_LOADER, payload: true });
  try {
    const res = yield call(() => axiosRequest(url, type, history, data));
    if (res) {
      setLocalStorage("token", res?.token);
      yield put({ type: SAVE_USER_LOGIN, payload: res });
      history.push(routePath.jobsPosted);
    }
  } catch (err) {
    history?.push(routePath.login);
    yield put({ type: SAVE_USER_LOGIN_ERROR, payload: err.message });
    yield put({ type: LOGIN_LOADER, payload: false });
  }
}

function* loginUser() {
  yield takeEvery(USER_LOGIN, userLogin);
}

function* signUpLogin(action) {
  const { url, type, data, history } = action.payload;
  yield put({ type: SIGNUP_LOADER, payload: true });
  try {
    const res = yield call(() => axiosRequest(url, type, history, data));
    if (res) {
      yield put({ type: SAVE_USER_SIGNUP, payload: res?.body });
      history.push(routePath.login);
    }
  } catch (err) {
    history?.push(routePath.signUp);
    yield put({ type: SAVE_USER_SIGNUP_ERROR, payload: err.errors });
    yield put({ type: SIGNUP_LOADER, payload: false });
  }
}

function* signUpUser() {
  yield takeEvery(USER_SIGNUP, signUpLogin);
}

function* pwdForgot(action) {
  const { url, type, history } = action.payload;
  try {
    const res = yield call(() => axiosRequest(url, type, history));
    if (res) {
      if (res?.token) {
        setLocalStorage("token", res?.token);
      }
      yield put({ type: SAVE_FORGOT_PASSWORD, payload: res });
      history.push(routePath.login);
    }
  } catch (err) {
    if (err.code === 422) {
      history.push(routePath.login);
      yield put({ type: SAVE_USER_LOGIN_ERROR, payload: err.message });
    } else {
      yield put({ type: SAVE_FORGOT_PASSWORD_ERROR, payload: err.message });
      history?.push(routePath.forgot);
    }
  }
}

function* forgotPwd() {
  yield takeEvery(FORGOT_PASSWORD, pwdForgot);
}

function* pwdReset(action) {
  const { url, type, history, data } = action.payload;
  try {
    const res = yield call(() =>
      axiosRequest(url, type, history, {
        ...data,
        token: getLocalStorage("token"),
      })
    );
    if (res) {
      yield put({ type: SAVE_RESET_PASSWORD, payload: res });
      history.push(routePath.login);
    }
  } catch (err) {
    yield put({ type: SAVE_RESET_PASSWORD_ERROR, payload: err.message });
    history?.push(routePath.reset);
  }
}

function* resetPwd() {
  yield takeEvery(RESET_PASSWORD, pwdReset);
}

const loginSaga = {
  loginUser: loginUser(),
  signUpUser: signUpUser(),
  forgotPwd: forgotPwd(),
  resetPwd: resetPwd(),
};

export default loginSaga;
