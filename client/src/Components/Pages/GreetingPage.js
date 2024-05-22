import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/haqdarshak.png";

const GreetingPage = () => {
  return (
    <Link to="/start" className="select-state">
      <div className="main">
        <div className="contents">
          <h3>Welcome to</h3>
          <div className="main-img">
            <img src={Logo} alt="Logo" />
          </div>
          <p>Your profile has been created successfully!</p>
        </div>
      </div>
    </Link>
  );
};

export default GreetingPage;
