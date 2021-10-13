import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../common/Button";
import { serviceRoute } from "../../apis/serviceRoute";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import { GET_POSTED_JOB } from "../../store/types/jobs.type";
import { routePath } from "../../routes/routePath";
import { Loader } from "../common/Loader";

import "./job.css";
import { ViewApplicantModal } from "./ViewApplicantModal";

export const PostedJobs = () => {
  const [jobsList, setJobsList] = useState([]);

  const { postedJobLoader, postedJobResponse, postedJobResponseErr } =
    useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: GET_POSTED_JOB,
      payload: { ...serviceRoute.getPostedJobs, history },
    });
  }, []);

  useEffect(() => {
    setJobsList(postedJobResponse);
  }, [postedJobResponse]);

  const { role = "" } = params;

  const recurectorProps = {
    ...history,
    params,
    postedJobResponse,
    jobsList,
  };

  const candidateProps = {
    ...history,
    params,
    postedJobResponse,
    jobsList,
  };

  if (postedJobLoader) {
    return <Loader />;
  } else if (postedJobResponseErr) {
    return <div>{postedJobResponseErr}</div>;
  } else if (role === "recruiter")
    return <RecruiterHome {...recurectorProps} />;
  else {
    return <CandidateHome {...candidateProps} />;
  }
};

const RecruiterHome = ({ history }) => {
  return (
    <div class="container job-container">
      <div class="row">
        <div class="col-lg-5">
          <h3>Jobs posted by you</h3>
        </div>
        <div class="row postedJobs">
          <div class="col-3 job">
            <div class="job-title">UI UX Designer</div>

            <div class="job-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt…
            </div>
            <div className="row job_bottom">
              <div class="location">Bengaluru</div>
              <div className="view-applicant">
                <button type="button">View applications</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ViewApplicantModal /> */}
      <div className="no-jobs">
        <p>Your posted jobs will show here!</p>
        <div className="row post-btn">
          <Button
            title="Post a Job"
            onClickHandler={() => history.push(routePath.jobPost)}
          />
        </div>
      </div>
    </div>
  );
};

const CandidateHome = ({ history }) => {
  return (
    <div class="container job-container">
      <div class="row">
        <div class="col-lg-5">
          <h3>Jobs for you</h3>
        </div>
        <div class="row postedJobs">
          <div class="col-3 job">
            <div class="job-title">UI UX Designer</div>

            <div class="job-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt…
            </div>
            <div className="row job_bottom">
              <div class="location">Bengaluru</div>
              <div className="view-applicant">
                <button type="button">apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ViewApplicantModal /> */}
      <div className="no-jobs">
        <p>Your posted jobs will show here!</p>
      </div>
    </div>
  );
};
