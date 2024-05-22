import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const RegistationMethod = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    let destination = "/location";

    switch (selectedOption) {
      case "newUser":
        destination = "/location";
        break;
      case "phoneNumber":
        destination = "/mobile";
        break;
      case "yojanaCard":
        destination = "/scan";
        break;
      default:
        destination = "/regiMethod";
        break;
    }
    navigate(destination);
  };

  return (
    <div className="regi-main">
      <div className="child1">
        <div className="back-btn">
          <Link to="/language" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
        <div className="regi-text">
          <h1>How do you want to login?</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <div className="sect-lag-sec">
            <div className="lag-click">
              <input
                type="radio"
                id="newUser"
                name="loginOption"
                value="newUser"
                checked={selectedOption === "newUser"}
                onChange={handleOptionChange}
              />
              <label htmlFor="newUser">Register me as a new user</label>
            </div>
            <div className="lag-click">
              <input
                type="radio"
                id="phoneNumber"
                name="loginOption"
                value="phoneNumber"
                checked={selectedOption === "phoneNumber"}
                onChange={handleOptionChange}
              />
              <label htmlFor="phoneNumber">Use my Phone Number</label>
            </div>
            <div className="lag-click">
              <input
                type="radio"
                id="yojanaCard"
                name="loginOption"
                value="yojanaCard"
                checked={selectedOption === "yojanaCard"}
                onChange={handleOptionChange}
              />
              <label htmlFor="yojanaCard">Use my Yojana Card</label>
            </div>
            <div className="para-text">
              <p>
                This allows you to experience the app in a language of your
                preference.
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

export default RegistationMethod;
