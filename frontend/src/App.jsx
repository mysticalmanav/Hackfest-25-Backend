import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landingpage/LandingPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sendingemail from "./Components/sendingmessage/Sendingemail.jsx";
import Comingsoon from '../src/Components/ComingSoon/Comingsoonpage.jsx'
import AboutUsPage from "./Components/AboutUs/Aboutuspage.jsx";
import CoreTeamPage from "./Components/Team/CoreTeamPage.jsx";
import ContactUsPage from "./Components/ContactUs/ContactUs.jsx";
import TeamRegistrationForm from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

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

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
