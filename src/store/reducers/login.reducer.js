/* eslint-disable import/no-anonymous-default-export */
import {
  SAVE_USER_LOGIN,
  LOGIN_LOADER,
  SAVE_USER_SIGNUP,
  SIGNUP_LOADER,
  SAVE_FORGOT_PASSWORD,
  SAVE_FORGOT_PASSWORD_ERROR,
  SAVE_USER_LOGIN_ERROR,
  SAVE_USER_SIGNUP_ERROR,
  SAVE_RESET_PASSWORD_ERROR,
  SAVE_RESET_PASSWORD,
} from "../types/login.type";

const initialState = {
  loginLoader: false,
  loginResponse: null,
  loginResponseErr: "",
  signUpLoader: false,
  signUpResponse: null,
  signupResponseErr: '',
  forgotResponse: null,
  forgotResponseErr: "",
  resetResponse: null,
  resetResponseErr: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_USER_LOGIN: {
      return { ...state, loginResponse: payload, loginResponseErr: '' };
    }
    case SAVE_USER_LOGIN_ERROR: {
      return { ...state, loginResponseErr: payload, loginResponse: null };
    }
    case LOGIN_LOADER: {
      return { ...state, loginLoader: payload };
    }
    case SAVE_USER_SIGNUP: {
      return { ...state, signUpResponse: payload, signupResponseErr: '' };
    }
    case SAVE_USER_SIGNUP_ERROR: {
      return { ...state, signupResponseErr: payload, signUpResponse: null };
    }
    case SIGNUP_LOADER: {
      return { ...state, signUpLoader: payload };
    }
    case SAVE_FORGOT_PASSWORD: {
      return { ...state, forgotResponse: payload, forgotResponseErr: '' };
    }
    case SAVE_FORGOT_PASSWORD_ERROR: {
      return { ...state, forgotResponseErr: payload, forgotResponse: null };
    }
    case SAVE_RESET_PASSWORD: {
      return { ...state, resetResponse: payload, resetResponseErr: '' };
    }
    case SAVE_RESET_PASSWORD_ERROR: {
      return { ...state, resetResponseErr: payload, resetResponse: null };
    }

    default: {
      return { ...state };
    }
  }
};
