import React, { useState } from "react";
import Background from "./Background";

let state = true;
const Contact = () => {
  const [input, setInput] = useState({
    FullName: "",
    Email: "",
    Password: "",
    ConPassword: "",
    Message: "",
  });

  const inputChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log("name: " + name + "; value :" + value);
    setInput((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const submitFun = () => {
    alert(
      `Fullname: ${input.FullName}; Email: ${input.Email}; Password: ${input.Password}; Confirm password: ${input.ConPassword}; Message: ${input.Message}`
    );
  };

  return (
    <>
      <section className="container-fluid contacts">
        <Background Bg="contactBackground" name="contact me" role="BG" />
        <div className="titleBox">
          <h1 className="title">Feel free to contact</h1>
          <div className="separator">
            <span className="circle"></span>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <form action="#" method="get" onSubmit={submitFun}>
              <input
                type="text"
                placeholder="Enter your name.."
                name="FullName"
                value={input.FullName}
                required
                onChange={inputChange}
              />
              <input
                type="email"
                placeholder="Enter your email.."
                name="Email"
                value={input.Email}
                required
                onChange={inputChange}
              />
              <input
                type="password"
                placeholder="Enter your password"
                name="Password"
                value={input.Password}
                required
                onChange={inputChange}
              />
              <div className="passwordBox">
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name="ConPassword"
                  value={input.ConPassword}
                  required
                  onChange={inputChange}
                />
              </div>
              <textarea
                placeholder="Write here.."
                name="Message"
                value={input.Message}
                rows="4"
                onChange={inputChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
