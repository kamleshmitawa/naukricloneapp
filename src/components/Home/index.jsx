import React from "react";
import { routePath } from "../../routes/routePath";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div class="bannerSection">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <h1>
                Welcome to <br /> My<span>Jobs</span>
              </h1>
              <a href={routePath.login} class="getStarted btn">
                Get Started
              </a>
            </div>
            <div class="col-lg-7">
              <figure>
                <img
                  src="assets/images/happycustomer.jpg"
                  alt="happy-customer"
                  width="622"
                  height="395"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="whyUs">
          <h2>Why us</h2>
          <div class="row">
            <div class="col-lg-4">
              <div class="whyUsCard">
                <div class="heading">
                  Get more
                  <br />
                  visibility
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="whyUsCard">
                <div class="heading">
                  Organize your
                  <br />
                  candidates
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="whyUsCard">
                <div class="heading">
                  Verify their
                  <br />
                  abilities
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="conpaniesTrust">
          <div class="heading">Companies Who Trust Us</div>
          <ul>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="assets/images/otherLogo.png" alt="otherLogo" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
