import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Info from "./Components/Pages/Info";
import Language from "./Components/Pages/Language";
import RegistationMethod from "./Components/Pages/RegistationMethod";
import Location from "./Components/Pages/Location";
import MobileInput from "./Components/Pages/MobileInput";
import OtpVerifyMethod from "./Components/Pages/OtpVerifyMethod";
import Detail from "./Components/Pages/Detail";
import Otp from "./Components/Pages/Otp";
import Scan from "./Components/Pages/Scan";
import Map from "./Components/Pages/Map";
import Address from "./Components/Pages/Address";
import GreetingPage from "./Components/Pages/GreetingPage";
import StartApp from "./Components/Pages/StartApp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/language" element={<Language />} />
        <Route path="/regiMethod" element={<RegistationMethod />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/location" element={<Location />} />
        <Route path="/address" element={<Address />} />
        <Route path="/map" element={<Map />} />
        <Route path="/mobile" element={<MobileInput />} />
        <Route path="/otpverify" element={<OtpVerifyMethod />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/start" element={<StartApp />} />
      </Routes>
    </Router>
  );
}

export default App;
