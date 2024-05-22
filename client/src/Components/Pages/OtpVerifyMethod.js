import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const OtpVerifyMethod = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    let destination = "/otpverify";

    switch (selectedOption) {
      case "yes":
        destination = "/details";
        break;
      case "no":
        destination = "/otp";
        break;
      default:
        destination = "/otpverify";
        break;
    }
    navigate(destination);
  };

  return (
    <div className="regi-main">
      <div className="child1">
        <div className="back-btn">
          <Link to="/mobile" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
        <div className="regi-text">
          <h1>Do you want to proceed without OTP verification?</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <div className="sect-lag-sec">
            <div className="lag-click">
              <input
                type="radio"
                id="yes"
                name="otpOption"
                value="yes"
                checked={selectedOption === "yes"}
                onChange={handleOptionChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="lag-click">
              <input
                type="radio"
                id="no"
                name="otpOption"
                value="no"
                checked={selectedOption === "no"}
                onChange={handleOptionChange}
              />
              <label htmlFor="no">
                No, I want to complete OTP verification
              </label>
            </div>
            <div className="para-text1">
              <p>
                Proceed without OTP if you live in an area with low network
                connectivity.
              </p>
            </div>
          </div>
          <div className="next-btn">
            <button onClick={handleNextButtonClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerifyMethod;
