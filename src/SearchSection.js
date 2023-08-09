import React from "react";
import "./search.css"; 


function SearchFunc({ onSearchChange, onButtonSubmit }) {
  return (
    <div className="tc ">
      <h4 className="ma10 green">
        This Magic brain will detect the faces <br></br>in your pictures....give
        it a try..!
      </h4>
      <div className="box br3 shadow-5 pa3 center">
        <input
          className="pa2 br2 br-green bg-light-green w-70 "
          type="search"
          placeholder="your Link Here...!"
          onChange={onSearchChange}
        />
        <button
          className="bg-blue br3 white  ml2 w-30 grow link dim dib "
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
}

export default SearchFunc;
