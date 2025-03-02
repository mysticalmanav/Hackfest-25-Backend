import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landingpage/LandingPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sendingemail from "./Components/sendingmessage/Sendingemail.jsx";
import Comingsoon from '../src/Components/ComingSoon/Comingsoonpage.jsx'
import AboutUsPage from "./Components/AboutUs/Aboutuspage.jsx";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
