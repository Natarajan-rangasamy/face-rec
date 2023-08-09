import React from "react";
import "./signin.css";

function Registery({ onRouteChange }) {
  return (
    <div className="center pa2" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "600px",
        height:"auto",
        paddingBottom: "20px",
      }}>
      <main
        className="pa4 black-80 br3 shadow-5"
      >
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Register...</legend>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="name">
                Name
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
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
          <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-60 shadow-5 grow pointer"
                type="submit"
                name="register"
                onClick={() => onRouteChange('home') } 
                value="register"
                />
        
        </div>
      </main>
    </div>
  );
}

export default Registery;
