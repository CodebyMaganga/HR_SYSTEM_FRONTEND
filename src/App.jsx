import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import Karibu from "./components/Karibu";
import Card from "./components/Card";


function App() {
  return (
    <>
      <NavBar />
      <Karibu />
      <Card />
    </>
  );
}

export default App;
