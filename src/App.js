import React from "react";
import "./App.css";
import "tachyons";
import "./index.css";
import Logos from "./Logos";
import Desc from "./description";
import SearchFunc from "./SearchSection";
import ParticlesBg from "particles-bg";
import Image from "./ImageBox";

const clarifySet = (image_Url) => {
  const PAT = "f0fd577cbc49402eb7e5e947e6ca0627";
  const USER_ID = "harish_shh";
  const APP_ID = "face-app";
  const MODEL_ID = "face-detection";
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
      inputs: '',
      image_Url:''
    }
  }

  onSearchChange = (event) => {
    this.setState({ inputs: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ image_Url: this.state.inputs });
    
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' +"/outputs", clarifySet(this.state.inputs))
     .then(response => response.json())
     .then(response => {
      console.log(response);
      if(response){
        fetch('http://localhost:3000/image',{
          method:'put',
          headers:{'content-type':'application/json'},
          body:JSON.stringify({
            id:this.state.user.id
          })
        })
      }
    
     })
     .catch(error => console.log('error', error));


  }
  render() {
    return (
      <div className="App">
        <h3
          className="link underline  pa3 f4 pointer  dib dim white"
          style={{ display: "flex", justifyContent: "end" }}
        >
          Sign Out
        </h3>

        <ParticlesBg
          type="lines"
          bg={{
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <Logos />
        <Desc />
        <SearchFunc
          onSearchChange={this.onSearchChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Image image_Url = {this.state.image_Url} />
      </div>
    );
  }
}
export default App;
