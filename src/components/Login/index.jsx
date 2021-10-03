import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { checkLoginValidation, clearLocalStorage } from "../../utils/utils";
import { USER_LOGIN } from "../../store/types/login.type";
import { serviceRoute } from "../../apis/serviceRoute";

import "./login.css";
import { Button } from "../common/Button";
import { Loader } from "../common/Loader";

export const Login = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const { loginLoader, loginResponseErr } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=> 
   clearLocalStorage()
  ,[])
  useEffect(() => {
    setErrorMsg(loginResponseErr);
  }, [loginResponseErr]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setErrorMsg("");
    setPayload({ ...payload, [name]: value });
  };

  const onLoginHandler = () => {
    let valid = checkLoginValidation(payload);
    if (valid?.isValid) {
      dispatch({
        type: USER_LOGIN,
        payload: { ...serviceRoute.login, data: payload, history },
      });
    } else {
      setErrorMsg(valid?.error);
    }
  };
  const { email = "", password = "" } = payload;

  if (loginLoader) {
    return <Loader />;
  }
  return (
    <>
      <div className="bannerSection"></div>
      <div className="loginSectn">
        <div className="heading">Login</div>
        <form>
          <div className={errorMsg ? "form-group error" : "form-group"}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              onChange={onChangeHandler}
              value={email}
              autoComplete="off"
              required
              name="email"
              id="enail"
              placeholder="Enter your email"
            />
          </div>
          <div className={errorMsg ? "form-group error" : "form-group"}>
            <label htmlFor="password" className="passForget">
              <span>Password</span>
              <span className="forgetPassword">
                <Link to="/forget-password">Forgot your password?</Link>
              </span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter you password"
              onChange={onChangeHandler}
              value={password}
              className="form-control"
              required
            />
            {errorMsg ? <div className="errorMsg">{errorMsg}</div> : ""}
          </div>
          <div className="row login_btn">
            <Button title="Login" onClickHandler={onLoginHandler} />
          </div>
          <p>
              New to MyJobs?
              <span>
                <Link to="/signup"> Create an account</Link>
              </span>
            </p>
        </form>
      </div>
    </>
  );
};
