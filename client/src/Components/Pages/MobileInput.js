import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const MobileInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");   
   
  const handleChange = (e) => {
    setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10));
  };

  const handleFocus = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 10);
    setPhoneNumber(limitedValue);
  }; 

  const numberSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/haqdarshak/sendotp",
        { phoneNumber: "+91" + phoneNumber }
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

  const isMobileValid = phoneNumber.length === 10;

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
          <h1>What is your mobile number?</h1>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag1">
          <div className="sect-lag-sec">
            <div className="lag-click1">
              <input
                type="tel"
                pattern="[0-9]*"
                placeholder="Enter Mobile Number"
                maxLength="10"
                value={phoneNumber}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>
            <div className="para-text1">
              <p>
                This is used to create an account in your name on the Haqdarshak
                app.
              </p>
            </div>
          </div>
          {isMobileValid && (
            <div className="next-btn">
              <Link
                to={isMobileValid ? "/otpverify" : "#"}
                className={`select-state ${isMobileValid ? "" : "disabled"}`}
              >
                <button onClick={numberSubmit} disabled={!isMobileValid}>
                  Next
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileInput;




// import React, { useState } from "react";
// import axios from "axios";
// import firebase from "firebase/compat/app";
// import "firebase/auth"; 
// import { initializeApp } from "firebase/app";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";
// import { Link } from "react-router-dom";
// import { FaArrowLeftLong } from "react-icons/fa6";

// const firebaseConfig = {
//   apiKey: "AIzaSyBwJEnCgWYz3PpOGAk4Coac302yjjGxUgI",
//   authDomain: "haqdarshak-a3cdc.firebaseapp.com",
//   projectId: "haqdarshak-a3cdc",
//   storageBucket: "haqdarshak-a3cdc.appspot.com",
//   messagingSenderId: "213355570946",
//   appId: "1:213355570946:web:6be16ab107826b2e58441b",
//   measurementId: "G-6G78LJ691Y",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const MobileInput = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const configureCaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "sign-in-button",
//       {
//         size: "invisible",
//         callback: (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           numberSubmit(); // Call numberSubmit when reCAPTCHA is verified
//           console.log("Recaptcha verified");
//         },
//         defaultCountry: "IN",
//       }
//     );
//   };

//   const numberSubmit = async () => {
//     configureCaptcha();
//    try {
//      const fullPhoneNumber = "+91" + phoneNumber; // Use a different variable name
//      console.log(fullPhoneNumber);
//      const appVerifier = window.recaptchaVerifier;

//      const response = await axios.post(
//        "http://localhost:5000/haqdarshak/sendotp",
//        { phoneNumber: fullPhoneNumber }, // Pass the constructed phone number
//        { appVerifier }
//      );

//      console.log("Response:", response.data);
//    } catch (error) {
//      if (error.response) {
//        console.log("Server response:", error.response.data);
//      } else if (error.request) {
//        console.log("No response received:", error.request);
//      } else {
//        console.log("Error:", error.message);
//      }
//      alert("Error: " + error.message);
//    }
//  };

//   const handleChange = (e) => {
//     setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10));
//   };

//   const handleFocus = (e) => {
//     const numericValue = e.target.value.replace(/\D/g, "");
//     const limitedValue = numericValue.slice(0, 10);
//     setPhoneNumber(limitedValue);
//   };

//   const isMobileValid = phoneNumber.length === 10;

//   return (
//     <div className="regi-main">
//       <div className="child1">
//         <div className="back-btn">
//           <Link to="/location" className="select-state">
//             <button>
//               <FaArrowLeftLong />
//             </button>
//           </Link>
//         </div>
//         <div className="regi-text">
//           <h1>What is your mobile number?</h1>
//         </div>
//       </div>
//       <div className="child2">
//         <div className="sec-lag1">
//           <div className="sect-lag-sec">
//             <div className="lag-click1">
//               <input
//                 type="tel"
//                 pattern="[0-9]*"
//                 placeholder="Enter Mobile Number"
//                 maxLength="10"
//                 value={phoneNumber}
//                 onChange={handleChange}
//                 onFocus={handleFocus}
//               />
//             </div>
//             <div className="para-text1">
//               <p>
//                 This is used to create an account in your name on the Haqdarshak
//                 app.
//               </p>
//             </div>
//           </div>
//           <div className="next-btn">
//             <Link
//               to={isMobileValid ? "/otpverify" : "#"}
//               className={`select-state ${isMobileValid ? "" : "disabled"}`}
//             >
//               <button onClick={numberSubmit} disabled={!isMobileValid}>
//                 Next
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileInput;

