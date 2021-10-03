import { all } from "redux-saga/effects";
import jobSaga from "./jobs.saga";
import loginSaga from "./login.saga";

export default function* rootSaga() {
  yield all([
    loginSaga.loginUser,
    loginSaga.signUpUser,
    loginSaga.forgotPwd,
    loginSaga.resetPwd,
    jobSaga.postJob,
    jobSaga.getPostedJob,
    
  ]);
}
