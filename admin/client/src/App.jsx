import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TeamList from "./components/TeamList.jsx";
import QrScanner from "./components/QR/Qrscanner.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeamList />} />
          <Route path="/Qr/scanner" element={<QrScanner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
