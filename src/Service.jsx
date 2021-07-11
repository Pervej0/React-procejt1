import React from "react";
import Background from "./Background";
import CommonCard from "./CommonCard";
import ServiceImg1 from "./Images/Services/1.jpg";
import ServiceImg2 from "./Images/Services/2.jpg";
import ServiceImg3 from "./Images/Services/3.jpg";
import ServiceImg4 from "./Images/Services/4.jpg";
import ServiceImg5 from "./Images/Services/5.jpg";
import ServiceImg6 from "./Images/Services/6.jpg";

const Service = () => {
  return (
    <>
      <section className="container-fluid services">
        <Background Bg="serviceBackground" name="Services" role="BG" />
        <div className="container">
          <div className="titleBox">
            <h1 className="title">Find your suitable</h1>
            <div className="separator">
              <span className="circle"></span>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <CommonCard imgSrc={ServiceImg1} />
            <CommonCard imgSrc={ServiceImg2} />
            <CommonCard imgSrc={ServiceImg2} />
            <CommonCard imgSrc={ServiceImg4} />
            <CommonCard imgSrc={ServiceImg5} />
            <CommonCard imgSrc={ServiceImg6} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
