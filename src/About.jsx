import React from "react";
import Profile from "./Images/aboutMe.png";
import Background from "./Background";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  return (
    <>
      <section className="container-fluid aboutMe">
        <Background Bg="aboutBackgroud" name="about me" role="BG" />
        <div className="container">
          <div className="titleBox">
            <h1 className="title">Find your suitable</h1>
            <div className="separator">
              <span className="circle"></span>
            </div>
          </div>
          <div className="row justify-content-lg-between align-items-center justify-content-center">
            <div className="box col-md-6 col-sm-10 mg-auto">
              <img
                className="img-fluid"
                src={Profile}
                alt="Profile"
                title="Author Image"
              />
            </div>
            <div className="box col-md-6 col-sm-10 mg-auto">
              <p className="Intro">
                <span className="dropCase">L</span>orem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
                <br />
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their defult
              </p>
              <div className="socaialLink">
                <p>Follow me:</p>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com/" target="_blank" title="Twitter">
                  <TwitterIcon />
                </a>
                <a
                  href="https://bd.linkedin.com/"
                  target="_blank"
                  title="Linkedin"
                >
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com/" target="_blank" title="Youtube">
                  <YouTubeIcon />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  title="Youtube"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
