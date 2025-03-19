import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import ProblemStatement from "./ps.jsx";
function ProblemStatementPage() {
  return (
    <>
      <Navbar />
      <div className="mb-5 h-7"></div>
      <ProblemStatement />
      
    </>
  );
}

export default ProblemStatementPage;
