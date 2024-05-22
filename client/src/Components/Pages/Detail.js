import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Detail = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleInputChange = (e) => {
 let { value, selectionStart } = e.target;

 value = value.replace(/[^\d/]/g, "");

 const originalLength = value.length;

 if (originalLength === 2 && selectionStart === 2) {
   value += "/";
 } else if (originalLength === 5 && selectionStart === 5) {
   value += "/";
 }

 const [day, month, year] = value.split("/");
 const dayInt = parseInt(day, 10);
 const monthInt = parseInt(month, 10);
 const yearInt = parseInt(year, 10);

 if (dayInt > 31 || monthInt > 12) {

   value = value.slice(0, -1);
 }

 if (e.nativeEvent.inputType === "deleteContentBackward") {
   setDob(value);
 } else if (value.length <= 10) {
  
   setDob(value);
 }
  };

  
  const detailsSubmit = async () => {
    try {
      const fullNameValue = document.querySelector("#fullName").value;
      const dobValue = dob.replaceAll(" / ", "/"); 
      const ageValue = age;

      const response = await axios.post(
        "http://localhost:5000/haqdarshak/createuser",
        {
          fullName: fullNameValue,
          dob: dobValue,
          age: ageValue,
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      if (error.response) {
        console.log("Server response:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error:", error.message);
      }
      alert("Error: " + error.message);
    }
  };

  const handleAgeChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.slice(0, 2);
    setAge(formattedValue);
  };

  return (
    <div className="regi-main">
      <div className="child1">
        <div className="back-btn">
          <Link to="/otpverify" className="select-state">
            <button>
              <FaArrowLeftLong />
            </button>
          </Link>
        </div>
        <div className="regi-text">
          <h1>Personal Details</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <div className="details-sec">
            <div className="name-text">
              <h3>Name</h3>
              <div className="lag-click1">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter Your Full Name"
                  required
                />
                <div className="labelline"> Full Name</div>
              </div>
            </div>
            <div className="Gender">
              <h3>Gender</h3>
              <div className="Gender-sec">
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
                <input type="radio" name="gender" value="other" /> Other
              </div>
            </div>
            <div className="birth-info">
              <h3>DOB/Age</h3>
              <div className="birth-details">
                <div className="lag-click1">
                  <input
                    type="text"
                    placeholder="Enter your Birthday"
                    required
                    value={dob}
                    onChange={handleInputChange}
                  />
                  <div className="labelline"> Date of Birth</div>
                </div>
                <span>Or</span>
                <div className="age-click1">
                  <input
                    type="number"
                    placeholder="Age"
                    maxLength="2"
                    value={age}
                    onChange={handleAgeChange}
                  />
                </div>
              </div>
            </div>
            <div className="para-text1">
              <p>
                This information helps us suggest schemes that are right for
                you.
              </p>
            </div>
            <div className="next-btn">
              <Link to="/greeting" className="select-state">
                <button onClick={detailsSubmit}>Next</button>
              </Link>
            </div>
            <div className="para-text1">
              <p>
                By creating an account, I agree to Haqdarshak’s Terms of Service
                & Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
