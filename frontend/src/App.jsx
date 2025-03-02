import { useState } from "react";
import "./App.css";
import LandingPage from "./Components/Landingpage/LandingPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sendingemail from "./Components/sendingmessage/Sendingemail.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<AboutUsPage />} /> */}
          <Route path="/Messaging" element={<Sendingemail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
