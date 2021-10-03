import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../common/Button";
import { serviceRoute } from "../../apis/serviceRoute";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { GET_POSTED_JOB } from "../../store/types/jobs.type";
import { routePath } from "../../routes/routePath";
import { Loader } from "../common/Loader";

export const PostedJobs = () => {
  const [jobsList, setJobsList] = useState([]);

  const { postedJobLoader, postedJobResponse } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: GET_POSTED_JOB,
      payload: { ...serviceRoute.getPostedJobs, history },
    });
  }, []);

  useEffect(() => {
    setJobsList(postedJobResponse);
  }, [postedJobResponse]);

  console.log(jobsList, "jobsListjobsListjobsList", postedJobResponse);

  if (postedJobLoader) {
    return <Loader />;
  }
  return (
    <>
      {/* <div class="bannerSection"> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h3>Jobs posted by you</h3>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div class="container">
        <div class="applicantsJobPopUp">
          <div class="applicantsJob">
            <div class="heading">
              <div>Applicants for this job</div>
              <span class="close"></span>
            </div>
            <div class="totalApplicants">Total 35 applications</div>
            <div class="allApplications">
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
              <div class="application">
                <div class="applicantName">
                  <span class="letter">E</span>
                  <label for="">Eliza Lucas</label>
                  <div class="email">abc123@email.com</div>
                </div>
                <div class="">Skills</div>
                <div class="skills">
                  Coding, designing, graphics, website, app ui
                </div>
              </div>
            </div>
            <div class="noApplication">
              <div>
                <img src="#" alt="noaplicantion" />
                <p>No applications available!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="no-jobs">
          <p>Your posted jobs will show here!</p>
          <Button
            title="Post a Job"
            onClickHandler={() => history.push(routePath.jobPost)}
          />
        </div>
      </div>
    </>
  );
};
