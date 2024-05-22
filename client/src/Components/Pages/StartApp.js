import React from 'react'
import Logo from "../../Images/haqdarshak.png";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const StartApp = () => {
  return (
    <div className="main-start">
      <div className="main-img1">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="auth-verify">
        <div className="check">
          <RiVerifiedBadgeFill id="check" />
          <h4>Find the benefits that are right for you or your business</h4>
        </div>
        <div className="check">
          <RiVerifiedBadgeFill id="check1" />
          <h4>Learn everything you need to apply </h4>
        </div>
        <div className="check">
          <RiVerifiedBadgeFill id="check1" />
          <h4>Save schemes and track your bookings </h4>
        </div>
      </div>
      <div className="start-btn">
        <button>Get Started!</button>
      </div>
    </div>
  );
}

export default StartApp;