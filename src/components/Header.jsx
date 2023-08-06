import React from "react";
import Bulletleft from "../assets/image/Bullet-Points-left.svg";
import Bulletright from "../assets/image/Bullet-Points-right.svg";
import socialmedia from "../assets/image/SOCIAL-MEDIA.svg";
import profile from "../assets/image/profile.svg";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header-bar">My Profile</div>
      <div className="header-container">
        <div className="header-content">
          <div className="greeting">Hi!</div>
          <div className="introduce">
            I'm Mohammad Reza. <br />a Frontend developer.
          </div>
          <div className="info">
            Frontend developer based in tehran, Iran.
            <br /> I am coding with a clean and beautiful problem <br />
            solving in mind.
          </div>
          <div className="sosial-box">
            <div className="social-text">Follow me</div>
            <div className="social-image">
              <img src={socialmedia} alt="socialmedia"></img>
            </div>
          </div>
          <div className="header-button">
            <button className="send-request">Send Request</button>
            <button className="download">Download CV</button>
          </div>
        </div>
        <div className="profile-image">
          <img src={Bulletleft} alt="Pointsleft" className="Bulletleft"></img>
          <img src={Bulletright} alt="Pointright" className="Bulletright"></img>
          <img src={profile} alt="Pointright" className="myprofile"></img>
        </div>
      </div>
    </>
  );
}

export default Header;
