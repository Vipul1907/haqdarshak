import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const Address = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  const [isStateClicked, setIsStateClicked] = useState(false);
  const [isDistrictClicked, setIsDistrictClicked] = useState(false);
  const [isPincodeClicked, setIsPincodeClicked] = useState(false);

  const handleStateChange = (e) => {
    setState(e.target.value);
    setIsStateClicked(true);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setIsDistrictClicked(true);
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setPincode(value);
      setIsPincodeClicked(true);
    }
  };

  const isFormValid = state && district && pincode;

  return (
    <div className="regi-main">
      <div className="child1">
        <div className="back-btn">
          <Link to="/location" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
        <div className="regi-text">
          <h1>Where are you from?</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <div className="sect-lag-sec">
            <div className="lag-click1">
              <input
                type="text"
                placeholder="Select State"
                required
                value={state}
                onChange={handleStateChange}
              />
              <div className="labelline"> state</div>
              <RiArrowDropDownLine id="down-arrow" />
            </div>
            {isStateClicked && (
              <div className="lag-click1">
                <input
                  type="text"
                  placeholder="Select District"
                  required
                  value={district}
                  onChange={handleDistrictChange}
                />
                <div className="labelline"> District</div>
                <RiArrowDropDownLine id="down-arrow" />
              </div>
            )}
            {isDistrictClicked && (
              <div className="lag-click1">
                <input
                  type="number"
                  placeholder="Enter your Pincode"
                  required
                  value={pincode}
                  onChange={handlePincodeChange}
                />
                <div className="labelline"> Pincode</div>
              </div>
            )}
            {isPincodeClicked && (
              <div className="next-btn">
                <Link
                  to={isFormValid ? "/mobile" : "#"}
                  className={`select-state ${isFormValid ? "" : "disabled"}`}
                >
                  <button disabled={!isFormValid}>Next</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
