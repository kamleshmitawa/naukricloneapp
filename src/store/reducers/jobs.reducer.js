/* eslint-disable import/no-anonymous-default-export */
import {
  POST_JOB_LOADER,
  SAVE_POST_JOB,
  SAVE_POST_JOB_ERROR,
  POSTED_JOB_LOADER,
  SAVE_POSTED_JOB_ERROR,
  SAVE_POSTED_JOB
} from "../types/jobs.type";

const initialState = {
  postJobLoader: false,
  postJobResponse: null,
  postJobResponseErr: "",
  postedJobLoader: false,
  postedJobResponse: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_JOB_LOADER: {
      return { ...state, postJobLoader: payload };
    }
    case SAVE_POST_JOB: {
      return {
        ...state,
        postJobResponse: payload,
        postJobResponseErr: "",
        postJobLoader: false,
      };
    }
    case SAVE_POST_JOB_ERROR: {
      return {
        ...state,
        postJobResponseErr: payload,
        postJobResponse: null,
        postJobLoader: false,
      };
    }
    case POSTED_JOB_LOADER: {
      return { ...state, postedJobLoader: payload };
    }
    case SAVE_POSTED_JOB: {
      return {
        ...state,
        postedJobResponse: payload,
        postedJobLoader: false,
      };
    }

    default: {
      return { ...state };
    }
  }
};
