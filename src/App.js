import React from "react";
import "./App.css";
import "tachyons";
import "./index.css";
import Logos from "./Logos";
import Desc from "./description";
import SearchFunc from "./SearchSection";
import ParticlesBg from "particles-bg";
import Image from "./ImageBox";
import SiginIn from "./signpage";
import Registery from "./register";

const clarifySet = (image_Url) => {
  const PAT = "f0fd577cbc49402eb7e5e947e6ca0627";
  const USER_ID = "harish_shh";
  const APP_ID = "face-app";
  // const MODEL_ID = "face-detection";
  // const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
  const IMAGE_URL = image_Url;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: "",
      image_Url: "",
      box: {},
      route: "signIn",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLoc = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inpic");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onSearchChange = (event) => {
    this.setState({ inputs: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === "signIn") {
      this.setState({ isSignedIn: false });
    }
    this.setState({ route: route });
  };

  onButtonSubmit = () => {
    this.setState({ image_Url: this.state.inputs });

    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      clarifySet(this.state.inputs)
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response) {
          fetch("https://face-back.onrender.com/image", {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then((response) => response.json())
            .then( count => {
             
              this.setState(Object.assign(this.state.user, { entries: count })
              )
              
            });
        }
        this.displayFaceBox(this.calculateFaceLoc(response));
      })
      .catch((error) => console.log("error", error));
  };
  render() {
    return (
      <div className="App">
        {this.state.route === "home" ? (
          <div>
            <h3
              onClick={
                (this.setState.route = () => this.onRouteChange("signIn"))
              }
              className="link underline navi  pa3 f4 pointer  dib dim white"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Sign Out
            </h3>
          </div>
        ) : (
          <div> </div>
        )}

        <ParticlesBg
          type="circles"
          bg={{
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        {this.state.route === "home" ? (
          <div>
            <Logos />
            <Desc
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <SearchFunc
              onSearchChange={this.onSearchChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <Image box={this.state.box} image_Url={this.state.image_Url} />
          </div>
        ) : this.state.route === "signIn" ? (
          <SiginIn
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Registery
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}
export default App;
