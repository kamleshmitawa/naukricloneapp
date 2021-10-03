import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { routePath } from "../../routes/routePath";
import { SAVE_USER_LOGIN } from "../../store/types/login.type";
import { clearLocalStorage } from "../../utils/utils";
import { Button } from "../common/Button";

export const Header = () => {
  const [isPostJob, setIsPostJob] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { loginResponse } = useSelector((state) => state.login);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginResponse) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loginResponse]);

  const onLogoutHandler = () => {
    setIsLogout(true);
    clearLocalStorage();
    history.push(routePath.home);
    dispatch({ type: SAVE_USER_LOGIN, payload: null });
  };
  let currentPath = history?.location?.pathname;

  return (
    <header>
      <div class="header">
        <div className="logo">
          <span className="logoName">My</span>
          <span className="logoTitle">Jobs</span>
        </div>
        {(currentPath === routePath.root || currentPath === routePath.home) && (
          <div className="loginBtn">
            <Link to={routePath.login}>Login/Signup</Link>
          </div>
        )}
        {isLoggedIn && (
          <>
            <Button
              title="Post a job"
              onClickHandler={() => setIsPostJob(!isPostJob)}
            />
            <Button title="Logout" onClickHandler={onLogoutHandler} />
          </>
        )}
        {isLogout && (
          <div class="successLogout">
            <em class="close" onClick={() => setIsLogout(false)}></em>
            <label>Logout</label>
            <span>You have successfully logged out.</span>
          </div>
        )}
      </div>
    </header>
  );
};
