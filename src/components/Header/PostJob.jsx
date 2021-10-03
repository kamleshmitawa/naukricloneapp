import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { serviceRoute } from "../../apis/serviceRoute";
import { POST_JOB } from "../../store/types/jobs.type";
import { checkPostJobValidation } from "../../utils/utils";
import { Button } from "../common/Button";
import { Loader } from "../common/Loader";

export const PostJob = () => {
  const [payload, setPayload] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const { postJobLoader, postJobResponseErr } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (postJobResponseErr) {
      setApiErrorMsg(postJobResponseErr);
    }
    setApiErrorMsg("");
  }, [postJobResponseErr]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setErrorMsg("");
    setPayload({ ...payload, [name]: value });
  };

  const onLoginHandler = () => {
    let valid = checkPostJobValidation(payload);
    if (valid?.isValid) {
      dispatch({
        type: POST_JOB,
        payload: { ...serviceRoute.createJob, data: payload, history },
      });
    } else {
      setErrorMsg(valid?.error);
    }
  };
  const { title = "", description = "", location = "" } = payload;

  if (postJobLoader) {
    return <Loader />;
  }
  return (
    <>
      <div className="bannerSection"></div>
      <div className="loginSectn">
        <div className="heading">Post a Job</div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Job Title*</label>
            <input
              type="title"
              className={errorMsg ? "form-control errorinput" : "form-control"}
              onChange={onChangeHandler}
              value={title}
              autoComplete="off"
              required
              name="title"
              id="title"
              placeholder="Enter job title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description*</label>
            <input
              type="textarea"
              className={errorMsg ? "form-control errorinput" : "form-control"}
              onChange={onChangeHandler}
              value={description}
              autoComplete="off"
              required
              name="description"
              id="description"
              placeholder="Enter job description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location*</label>
            <input
              type="location"
              className={errorMsg ? "form-control errorinput" : "form-control"}
              onChange={onChangeHandler}
              value={location}
              autoComplete="off"
              required
              name="location"
              id="location"
              placeholder="Enter location"
            />
          </div>
          {errorMsg ? <div className="error">{errorMsg}</div> : ""}
          {apiErrorMsg ? <div className="error">{apiErrorMsg}</div> : ""}
          <div className="text-center">
            <Button title="Post" onClickHandler={onLoginHandler} />
          </div>
        </form>
      </div>
    </>
  );
};
