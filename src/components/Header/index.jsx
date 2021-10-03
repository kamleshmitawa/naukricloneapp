import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routePath } from "../../routes/routePath";
import { Button } from "../common/Button";

export const Header = () => {
  const [isPostJob, setIsPostJob] = useState(false);

  return (
    <header>
      <div className="logo">
        <span className="logoName">My</span>
        <span className="logoTitle">Jobs</span>
      </div>
        <Button title="Post a job" onClickHandler={()=> setIsPostJob(!isPostJob)} />
      <div className="loginBtn">
          <Link to={routePath.login}>Login/Signup</Link>
      </div>
      <div class="successLogout">
        <em class="close"></em>
        <label>Logout</label>
        <span>You have successfully logged out.</span>
      </div>
    </header>
  );
};
