import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/haqdarshak.png";
const Main = () => {
  return (
    <Link to="/info" className="select-state">
      <div className="main">
        <div className="main-img">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </Link>
  );
};

export default Main;
