import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TeamList from "./components/TeamList.jsx";
import QrScanner from "./components/QR/Qrscanner.jsx";
import Login from "./components/login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/teamlist" element={<TeamList />} />
          <Route path="/Qr" element={<QrScanner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
