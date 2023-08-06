import React from "react";
import ig from "../assets/image/ig.svg";
import mail from "../assets/image/mail.png";
import send from "../assets/image/send.svg";
import image1 from "../assets/image/1.svg";
import image2 from "../assets/image/2.svg";
import image3 from "../assets/image/3.svg";
import image4 from "../assets/image/4.svg";
import image5 from "../assets/image/5.svg";
import image6 from "../assets/image/6.svg";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="title">
          <div className="Portfolio">Portfolio </div>
          <button className="see-more">see more →</button>
        </div>
        <div className="image-box">
          <div className="images">
            <img src={image1} alt="Image 1"></img>
            <img src={image2} alt="Image 2"></img>
            <img src={image3} alt="Image 3"></img>
            <img src={image4} alt="Image 4"></img>
            <img src={image5} alt="Image 5"></img>
            <img src={image6} alt="Image 6"></img>
          </div>
        </div>
        <div className="footer-bar">
          <div className="email">
            <img src={mail} alt="Mail Icon"></img>
            <div className="email-text">piyawaleenm@gmail.com</div>
          </div>
          <p>© Copyright 2021 | mmrz315</p>
          <div className="social">
            <img src={ig} alt="Instagram Logo" className="instagram-logo"></img>
            <img src={send} alt="Send Icon" className="send-icon"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
