import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landingpage/LandingPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sendingemail from "./Components/sendingmessage/Sendingemail.jsx";
import Comingsoon from "../src/Components/ComingSoon/Comingsoonpage.jsx";
import AboutUsPage from "./Components/AboutUs/Aboutuspage.jsx";
import CoreTeamPage from "./Components/Team/CoreTeamPage.jsx";
import ContactUsPage from "./Components/ContactUs/ContactUs.jsx";
import TeamRegistrationForm from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProblemStatementPage from "./Components/problemstatemant/pspage.jsx";
import Ps1 from "./Components/problemstatemant/ps1.jsx";
import Ps2 from "./Components/problemstatemant/ps2.jsx";
import Ps3 from "./Components/problemstatemant/ps3.jsx";
import Ps4 from "./Components/problemstatemant/ps4.jsx";
import Ps5 from "./Components/problemstatemant/ps5.jsx";
import Ps6 from "./Components/problemstatemant/ps6.jsx";
import Ps7 from "./Components/problemstatemant/ps7.jsx";
import Ps8 from "./Components/problemstatemant/ps8.jsx";
import Ps9 from "./Components/problemstatemant/ps9.jsx";
import Ps10 from "./Components/problemstatemant/ps10.jsx";
import Ps11 from "./Components/problemstatemant/ps11.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutUsPage />} /> */}
          <Route path="/Messaging" element={<Sendingemail />} />
          <Route path="/comingsoon" element={<Comingsoon />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/Team" element={<CoreTeamPage />} />
          <Route path="/Contact" element={<ContactUsPage />} />
          <Route path="/register" element={<TeamRegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/problemstatement" element={<ProblemStatementPage />} />
          <Route path="/problemstatement/ps1" element={<Ps1 />} />
          <Route path="/problemstatement/ps2" element={<Ps2 />} />
          <Route path="/problemstatement/ps3" element={<Ps3 />} />
          <Route path="/problemstatement/ps4" element={<Ps4 />} />
          <Route path="/problemstatement/ps5" element={<Ps5 />} />
          <Route path="/problemstatement/ps6" element={<Ps6 />} />
          <Route path="/problemstatement/ps7" element={<Ps7 />} />
          <Route path="/problemstatement/ps8" element={<Ps8 />} />
          <Route path="/problemstatement/ps9" element={<Ps9 />} />
          <Route path="/problemstatement/ps10" element={<Ps10 />} />
          <Route path="/problemstatement/ps11" element={<Ps11 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
