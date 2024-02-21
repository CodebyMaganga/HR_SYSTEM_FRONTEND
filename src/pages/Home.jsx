import React from "react";

import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import MidCards from "../components/MidCards";
import BottomCards from "../components/BottomCards";

function Home() {
  return (
    <div>
      
      <NavLink to="/employees">
        <Card />
      </NavLink>
      <MidCards />
      <BottomCards />
    </div>
  );
}

export default Home;
