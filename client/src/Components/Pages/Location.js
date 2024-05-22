import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";

const Location = () => {
  return (
    <div className="regi-main">
      <div className="child1">
        <div className="back-btn">
          <Link to="/regiMethod" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
        <div className="regi-text">
          <h1>Choose Location</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <div className="sect-lag-sec">
            <Link to="/address" className="select-state">
              <div className="lag-click1">
                <input type="text" placeholder="Select State" required />
                <div className="labelline"> state</div>
                <RiArrowDropDownLine id="down-arrow" />
              </div>
            </Link>
          </div>
          <div>OR</div>
          <div className="current-lication">
            <Link to="/map" className="select-state">
              <button>
                <MdMyLocation />
                Use current location
              </button>
            </Link>
          </div>
          <p>
            This is used to give you information more accurate to your area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
