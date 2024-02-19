import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import Karibu from "./components/Karibu";
import Card from "./components/Card";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <NavBar />
      <Karibu />
      <Card />

      <Login />
    </>
  );
}

export default App;
