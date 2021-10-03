import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FORGOT_PASSWORD } from "../../store/types/login.type";
import { checkForgotValidation } from "../../utils/utils";
import { Button } from "../common/Button";
import { serviceRoute } from "../../apis/serviceRoute";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "./login.css";

export const Forgot = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { forgotResponseErr } = useSelector(state=> state.login)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setErrorMsg(forgotResponseErr)
  }, [forgotResponseErr])

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
    setErrorMsg("");
  };

  const forgotPasswordHandler = () => {
    let valid = checkForgotValidation(email);
    if (valid?.isValid) {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: { ...serviceRoute.resetPassword(email), history },
      });
    } else {
      setErrorMsg(valid?.error);
    }
  };

  return (
    <div className="main-container">
      <div className="row forgot_container">
        <form>
          <h2>Forgot your password?</h2>
          <p>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
              name="email"
              value={email}
              onChange={onChangeHandler}
            />
            {errorMsg ? <div className="error">{errorMsg}</div> : ""}
          </div>
          <Button title="Submit" onClickHandler={forgotPasswordHandler} />
        </form>
      </div>
    </div>
  );
};
