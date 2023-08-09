import React from "react";
import "./signin.css";

function SiginIn({ onRouteChange }) {
  return (
    <div className="center pa2" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "600px",
        height:"auto",
        paddingBottom: "20px",
      }}>
      <main
        className="pa4 black-80 br3 shadow-5"
      >
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
            onClick={() => onRouteChange('home') }
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <p>
            If your are a new user <br></br>kindly register here ......!
          </p>
          <div className="lh-copy mt3">
            <button onClick={() => onRouteChange('register') } className="f4 b link dim black db pointer center pa2 bg-transparent" style={{textDecoration:"underline"}}>
              Register
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SiginIn;
