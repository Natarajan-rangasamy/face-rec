import React from "react";
import "./signin.css";

class SiginIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sel: "",
      spw: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ sel: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ spw: event.target.value });
  };

  onSubmitInfo = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.sel,
        password: this.state.spw,
      })
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      // .catch((err) => console.log("something wrong"));
  };

  render() {
    return (
      <div
        className="center pa2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "600px",
          height: "auto",
          paddingBottom: "20px",
        }}
      >
        <main className="pa4 black-80 br3 shadow-5">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitInfo}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <p>
              If your are a new user <br></br>kindly register here ......!
            </p>
            <div className="lh-copy mt3">
              <button
                onClick={() => this.props.onRouteChange("register")}
                className="f4 b link dim black db pointer center pa2 bg-transparent"
                style={{ textDecoration: "underline" }}
              >
                Register
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default SiginIn;
