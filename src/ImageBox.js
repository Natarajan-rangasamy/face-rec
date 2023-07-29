import React from "react";

function Image({ image_Url }) {
  return (
    <div className="App">
      <img
        className="br3 grow"
        src={ image_Url}
        alt="web-pic"
        width={"500px"}
      />
    </div>
  );
}

export default Image;
