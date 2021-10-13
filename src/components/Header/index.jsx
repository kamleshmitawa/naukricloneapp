import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { routePath } from "../../routes/routePath";
import { SAVE_USER_LOGIN } from "../../store/types/login.type";
import { clearLocalStorage } from "../../utils/utils";

export const Header = () => {
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
    clearLocalStorage();
    history.push(routePath.login);
    }
  }, [loginResponse]);

  const onLogoutHandler = (type = "") => {
    if (type == "logoutBtn") {
      setIsLogout(true);
    }
    clearLocalStorage();
    history.push(routePath.home);
    dispatch({ type: SAVE_USER_LOGIN, payload: null });
    setTimeout(() => setIsLogout(false), 1000);
  };

  return (
    <header>
      <div class="header">
        <div className="logo" onClick={onLogoutHandler}>
          <span className="logoName">My</span>
          <span className="logoTitle">Jobs</span>
        </div>
        {!isLoggedIn && (
          <div className="loginBtn">
            <Link to={routePath.login}>Login/Signup</Link>
          </div>
        )}
        {isLoggedIn && (
          <div className="profile">
            <div className="jobPost">
              <Link to={routePath.jobPost}>Post a job</Link>
            </div>
            <div className="profileName">
              {loginResponse?.name?.charAt?.(0)}
            </div>
            <div className="logoutBtn">
              <ul>
                <li onClick={() => onLogoutHandler("logoutBtn")}> logout</li>
              </ul>
            </div>
          </div>
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
