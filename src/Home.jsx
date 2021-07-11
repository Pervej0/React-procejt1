import React from "react";
import { NavLink } from "react-router-dom";
import Cube from "./Cube";

const Home = () => {
  return (
    <>
      <section className="container-fluid homeBackground">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 order-2 order-lg-1 box">
              <h1>
                <span style={{ color: "#5FC604" }}>Hello, Guys</span> <br /> I
                am Md
                <strong>
                  &nbsp;
                  <NavLink exact to="/about">
                    Pervej
                  </NavLink>
                </strong>
                &nbsp; Hossain
                <br />
                Welcome to my world.
              </h1>
              <NavLink exact to="/service" className="startBtn">
                Get start
              </NavLink>
            </div>
            <div className="col-md-6 order-1 order-lg-2 box d-flex align-items-center">
              <Cube />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
