import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../CSS/Language.css";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    let destination = "/language";

    switch (selectedLanguage) {
      case "english":
        destination = "/regiMethod";
        break;
      case "hindi":
        alert("This language is currently unavailable.");
        break;
      case "marathi":
        alert("This language is currently unavailable.");
        break;
      default:
        destination = "/language";
        break;
    }
    navigate(destination);
  };

  return (
    <div className="regi-main">
      <div className="child1">
        <div className="back-btn">
          <Link to="/info" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
        <div className="regi-text">
          <h1>Which language do you prefer?</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <div className="sect-lag-sec">
            <div className="lag-click">
              <input
                type="radio"
                id="english"
                name="fav_language"
                value="english"
                checked={selectedLanguage === "english"}
                onChange={handleLanguageSelect}
              />
              <label htmlFor="english">English</label>
            </div>
            <div className="lag-click">
              <input
                type="radio"
                id="hindi"
                name="fav_language"
                value="hindi"
                checked={selectedLanguage === "hindi"}
                onChange={handleLanguageSelect}
              />
              <label htmlFor="hindi">हिंदी</label>
            </div>
            <div className="lag-click">
              <input
                type="radio"
                id="marathi"
                name="fav_language"
                value="marathi"
                checked={selectedLanguage === "marathi"}
                onChange={handleLanguageSelect}
              />
              <label htmlFor="marathi">मराठी</label>
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

export default Language;
