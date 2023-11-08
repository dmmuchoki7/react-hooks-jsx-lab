import React from "react";
import {name, city} from "../data/data.js";

// Style function
const HStyle = {
  color: 'firebrick'
};

function Home() {
  // update the JSX being returned!
  return <div id="home">
   <h1 style={HStyle}>{name} is a Web Developer from {city}</h1> 
  </div>;
}

export default Home;
