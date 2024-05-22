import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdGpsFixed } from "react-icons/md";
import map from "../../Images/map.png";

const Map = () => {
  return (
    <div className="map-main">
      <div className="map-img">
        <img src={map} alt="Map" />
        <div className="map-back-btn">
          <Link to="/location" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
      </div>
      <div className="select-loc">
        <div className="loc-datails">
          <p>You are here right now</p>
          <div className="address">
            <MdGpsFixed />
            <h4>Guwahati, Assam, 781004</h4>
          </div>
        </div>
        <div className="next-btn">
          <Link to="/address" className="select-state">
            <button>Proceed</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Map;
