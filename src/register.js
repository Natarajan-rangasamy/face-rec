import React from "react";
import "./signin.css";

class Registery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubmitInfo = () => {
    fetch("https://face-back.onrender.com/register", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => console.log("something wrong"));
  };

  render() {
    return (
      <div
        className="center pa2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          width: "600px",
          height: "auto",
          paddingBottom: "20px",
        }}
      >
        <main className="pa4 black-80 br3 shadow-5">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Register...</legend>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
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
                  required
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
                  required
                />
              </div>
            </fieldset>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-60 shadow-5 grow pointer"
              type="submit"
              name="register"
              onClick={this.onSubmitInfo}
              value="register"
              required
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Registery;
