import React from "react";
import "./facebox.css";

function Image({ image_Url, box }) {
  return (
    <div className="App ma center">
      <div className="absolute mt2">
      <img id = 'inpic'
        className="br3 grow"
        src={ image_Url}
        alt="web-pic"
        width={"500px"}
        height={'auto'}
      />
      <div className="bounding-box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
      </div>
    </div>
  );
}

export default Image;
