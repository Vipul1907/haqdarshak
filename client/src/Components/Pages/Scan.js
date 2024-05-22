import { React } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiSolidTorch } from "react-icons/bi";
import { RiUpload2Fill } from "react-icons/ri";
import Qr from "../../Images/qr.png";

const Scan = () => {
  return (
    <div className="regi-main1">
      <div className="scan-child1">
        <div className="scan-btns">
          <div className="scan-back-btn">
            <Link to="/regiMethod" className="select-state">
              <button>
                <FaArrowLeftLong />
              </button>
            </Link>
          </div>
          <div className="torch-back-btn">
            <button>
              <BiSolidTorch />
            </button>
          </div>
        </div>
        <div className="scan-detals">
          <div className="scan-text">
            <h3>Scan QR from Yojana Card to login</h3>
          </div>
          <div className="scan-img">
            <img src={Qr} alt="qr" />
          </div>
          <div className="upload-btn">
            <label htmlFor="file-upload" className="custom-file-upload">
              <RiUpload2Fill />
              Upload Image from Gallary
            </label>

            <input
              id="file-upload"
              className="upload-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      <div className="child2">
        <div className="sec-lag">
          <span>OR</span>
          <div className="next-btn">
            <Link to="/mobile" className="select-state">
              <button>Use Phone Number</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
