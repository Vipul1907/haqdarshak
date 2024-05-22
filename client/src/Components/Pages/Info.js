import React from "react";
import Image1 from "../../Images/image1.png";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <Link to="/language" className="select-state">
      <div className="main-info">
        <div className="info-text">
          <h1>Getting benefits is now easy !</h1>
        </div>
        <div className="img">
          <img src={Image1} alt="Image1" />
        </div>
      </div>
    </Link>
  );
};

export default Info;
