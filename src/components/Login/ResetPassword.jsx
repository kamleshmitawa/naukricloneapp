import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { serviceRoute } from "../../apis/serviceRoute";
import { RESET_PASSWORD } from "../../store/types/login.type";
import { checkResetPwdValidation } from "../../utils/utils";
import { Button } from "../common/Button";
import "./login.css";

export const ResetPassword = () => {
  const [payload, setPayload] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const { loginResponse, resetResponseErr, resetResponse } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setErrorMsg(resetResponseErr);
  }, [resetResponseErr]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setErrorMsg([]);
    setPayload({ ...payload, [name]: value });
  };
  const resetPasswordHandler = () => {
    let valid = checkResetPwdValidation(payload);
    if (valid?.isValid) {
      dispatch({
        type: RESET_PASSWORD,
        payload: { ...serviceRoute.changePassword, data: payload, history },
      });
    } else {
      setErrorMsg(valid?.error);
    }
  };
  const { password = "", confirmPassword = "" } = payload;

  console.log(loginResponse, "loginResponseloginResponse");
  return (
    <div className="main-container">
      <div className="row forgot_container">
        <form>
          <h2>Reset Your Password</h2>
          <p>Enter your new password below.</p>
          <div className="form-group">
            <label for="password">New password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              name="password"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="confirmPassword">Confirm new password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              id="confirmPassword"
              value={confirmPassword}
              name="confirmPassword"
              onChange={onChangeHandler}
            />
            {errorMsg ? <div className="error">{errorMsg}</div> : ""}
          </div>
          <Button title="Reset" onClickHandler={resetPasswordHandler} />
        </form>
      </div>
    </div>
  );
};
