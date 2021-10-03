import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FORGOT_PASSWORD } from "../../store/types/login.type";
import { checkForgotValidation } from "../../utils/utils";
import { Button } from "../common/Button";
import { serviceRoute } from "../../apis/serviceRoute";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export const PostedJobs = () => {
  //   const { forgotResponseErr } = useSelector(state=> state.login)
  const dispatch = useDispatch();
  const history = useHistory();

  return <div className="main-container"></div>;
};
