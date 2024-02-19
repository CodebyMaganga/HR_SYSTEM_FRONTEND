import React from 'react'
import Karibu from "../components/Karibu"
import Card from "../components/Card";
import { NavLink } from 'react-router-dom';

function Home(){
  return (
    <div>
      <Karibu />
      <NavLink to="/Employees">
        <Card />
      </NavLink>
      
    </div>
  );
}

export default Home