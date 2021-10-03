import React from 'react';

export const PostJob = () => {
  return (
    <>
      <div className="bannerSection"></div>
      <div className="loginSectn">
        <div className="heading">Login</div>
        <form>
          {/* <div className={errorMsg ? "form-group error" : "form-group"}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={onChangeHandler}
              value={email}
              autoComplete="off"
              required
              name="email"
              id="enail"
              placeholder="Enter your email"
            />
          </div>
          <div className={errorMsg ? "form-group error" : "form-group"}>
            <label htmlFor="password" className="passForget">
              <span>Password</span>
              <span className="forgetPassword">
                <Link to="/forget-password">Forgot your password?</Link>
              </span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter you password"
              onChange={onChangeHandler}
              value={password}
              className="form-control"
              required
            />
            {errorMsg ? <div className="errorMsg">{errorMsg}</div> : ""}
          </div>
          <div className="text-center">
            <Button title="login" onClickHandler={onLoginHandler} />
            <p>
              New to MyJobs?
              <span>
                <Link to="/signup">Create an account</Link>
              </span>
            </p>
          </div> */}
        </form>
      </div>
    </>
  );
};
