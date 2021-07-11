import React from "react";

const Background = (props) => {
  return (
    <>
      <div className={props.Bg} id={props.role}>
        <h1>{props.name}</h1>
      </div>
    </>
  );
};

export default Background;
