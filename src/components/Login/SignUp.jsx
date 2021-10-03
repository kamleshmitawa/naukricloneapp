import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { serviceRoute } from "../../apis/serviceRoute";
import { routePath } from "../../routes/routePath";
import { USER_SIGNUP } from "../../store/types/login.type";
import { checkSignupValidation } from "../../utils/utils";
import { Button } from "../common/Button";
import { Loader } from "../common/Loader";
import "./login.css";

export const SignUp = () => {
  const [payload, setPayload] = useState({
    email: "",
    userRole: 0,
    password: "",
    confirmPassword: "",
    name: "",
    skills: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const { signUpLoader, signupResponseErr } = useSelector(
    (state) => state.login
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=> setErrorMsg(signupResponseErr), [signupResponseErr])

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setErrorMsg([]);
    setPayload({ ...payload, [name]: value });
  };

  const onSignupHandler = () => {
    let valid = checkSignupValidation(payload);

    if (valid?.isValid) {
      dispatch({
        type: USER_SIGNUP,
        payload: { ...serviceRoute.register, data: payload, history },
      });
    } else {
      setErrorMsg([{ name : valid?.error }]);
    }
  };
  const {
    userRole,
    name = "",
    email = "",
    password = "",
    confirmPassword = "",
    skills = "",
  } = payload;

  if (signUpLoader) {
    return <Loader />;
  }
  return (
    <div className="main-container">
      <div className="row login_container">
        <form>
          <h2>Signup</h2>
          <p>I’m a*</p>
          <div className="row signup_roles">
            <div className={userRole === 0 ? "" : "notactive" }>
            <Button
              title="Recruiter"
              onClickHandler={() => setPayload({ ...payload, userRole: 0 })}
            />
            </div>
            <div className={userRole === 1 ? "" : "notactive" }>
            <Button
              title="Candidate"
              onClickHandler={() => setPayload({ ...payload, userRole: 1 })}
            />
            </div>
          </div>
          <div className="form-group">
            <label for="name">Full Name*</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="form-control"
              id="name"
              value={name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="email">Email Address*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="password">Create Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="confirmPassword">Confirm Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              name="confirmPassword"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="skills">Skills</label>
            <input
              type="text"
              placeholder="Enter comma separated skills"
              className="form-control"
              id="skilss"
              value={skills}
              name="skills"
              onChange={onChangeHandler}
            />
          </div>
          {errorMsg?.length ? <div className="error">{errorMsg.map(err=> err.name)}</div> : ""}
          <Button title="Signup" onClickHandler={onSignupHandler} />
          <div>
            Have a account?
            <span>
              <Link to={routePath.login}>Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
