import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Welcome, I'm
         <br /> <span className="info-name">Larry Lai</span>.<br />
         <p> Interested in HFT/Crypto/Finance</p>
         <p> Am Quant/Dev/Student/Basketball enthusiast</p>
         <p> Currently learning Mit6s081/CS144/CMU15213/CMU15445/Solidity</p>
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      {/* <SocialContact /> */}
    </div>
  );
}

export default About;