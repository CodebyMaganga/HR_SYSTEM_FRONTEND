import { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import MidCards from "./components/MidCards";
import BottomCards from "./components/BottomCards";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>

      <MidCards/>
      <BottomCards/>
    </>
  );
}

export default App;