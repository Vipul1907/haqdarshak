import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { FaArrowLeftLong } from "react-icons/fa6";

const Otp = () => {
  const [countdown, setCountdown] = useState(179);
  const [otp, setOtp] = useState("");
  const [isOtpInputFocused, setIsOtpInputFocused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendClick = () => {
    setCountdown(179);
  };

  const handleOtpInputFocus = (e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    setIsOtpInputFocused(true);
  };

  const handleOtpInputBlur = () => {
    setIsOtpInputFocused(false);
  };

  const isNextButtonEnabled = otp.trim().length > 0;

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
          <h1>What is the OTP?</h1>
        </div>
      </div>
      <div className="child2">
        <div className="otp-section">
          <div className="otp-sect">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="space-otp"></span>}
              renderInput={(props) => (
                <input
                  {...props}
                  type="tel"
                  pattern="[0-9]*"
                  onFocus={handleOtpInputFocus}
                  onBlur={handleOtpInputBlur}
                />
              )}
              className="otp-custom"
            />
          </div>
          {isOtpInputFocused && (
            <div className="para-text1">
              <h5>
                Did not receive OTP?
                <button onClick={handleResendClick}>Resend</button>{" "}
              </h5>
            </div>
          )}
          {!isOtpInputFocused && (
            <div className="para-text1">
              <p>We have sent an OTP to your mobile number</p>
              <h6>Resend code in {formatTime(countdown)}</h6>{" "}
            </div>
          )}

          <div className="next-btn">
            <Link
              to={isNextButtonEnabled ? "/details" : "/otp"}
              className={`select-state ${
                isNextButtonEnabled ? "" : "disabled"
              }`}
            >
              <button disabled={!isNextButtonEnabled}>Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
