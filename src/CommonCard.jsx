import React from "react";
import { NavLink } from "react-router-dom";

const CommonCard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-10 lg-auto my-3">
        <div
          className="card"
          style={{ maxWdth: "18rem", minHeight: "400px", margin: "0 auto" }}
        >
          <img
            className="card-img-top img-fluid"
            src={props.imgSrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink exact to="/contact" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCard;
