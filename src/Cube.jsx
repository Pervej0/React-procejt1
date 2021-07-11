import React from "react";
import "./Cube.css";

const Cube = () => {
  return (
    <>
      <div className="cubeBox">
        <div className="cube">
          <div className="front"></div>
          <div className="back"></div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default Cube;
