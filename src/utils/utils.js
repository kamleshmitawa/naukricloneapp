function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

export const checkLoginValidation = (loginData) => {
  let validateObj = { isValid: true, error: "" };
  const { email = "", password = "" } = loginData;

  if (!validateEmail(email)) {
    validateObj.error = "Please enter valid email!";
    validateObj.isValid = false;
  } else if (password.length < 8) {
    validateObj.error = "password length at-least should be 8";
    validateObj.isValid = false;
  }
  return validateObj;
};

export const checkSignupValidation = (signupData) => {
  let validateObj = { isValid: true, error: "" };
  const {
    name = "",
    email = "",
    password = "",
    confirmPassword = "",
  } = signupData;

  if (name == "") {
    validateObj.error = "Please enter valid full name";
    validateObj.isValid = false;
  } else if (!validateEmail(email)) {
    validateObj.error = "Please enter valid email!";
    validateObj.isValid = false;
  } else if (password.length < 8) {
    validateObj.error = "password length at-least should be 8";
    validateObj.isValid = false;
  } else if (confirmPassword !== password) {
    validateObj.error = "confirm password should be same as create password";
    validateObj.isValid = false;
  }

  return validateObj;
};

export const checkForgotValidation = (email = "") => {
  let validateObj = { isValid: true, error: "" };

  if (!validateEmail(email)) {
    validateObj.error = "Please enter valid email!";
    validateObj.isValid = false;
  }

  return validateObj;
};


export const checkResetPwdValidation = (resetData) => {
  let validateObj = { isValid: true, error: "" };
const { password = "", confirmPassword = "" } = resetData;

   if (password.length < 8) {
    validateObj.error = "password length at-least should be 8";
    validateObj.isValid = false;
  }
  else if (password !== confirmPassword) {
    validateObj.error = "confirm password should be same as create password";
    validateObj.isValid = false;
  }
  return validateObj;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};