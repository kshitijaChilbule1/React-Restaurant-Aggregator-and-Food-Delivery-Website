import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div style={{width:'100%', height:'100vh'}}>
      <div className="row">
        <div className="header-content">
          <h1>DISCOVER THE BEST FOOD AND DRINKS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            ut debitis soluta cum nisi eos alias minus ipsam quos mollitia
            doloribus, amet, unde harum beatae qui laudantium vitae iure?
            Itaque.
          </p>
          <Link to="/restaurantList" className="orderBtn">ORDER NOW</Link>
        </div>
        <div className="hero-img">
        <img src="https://media.istockphoto.com/id/1157284644/photo/paneer-curry.jpg?s=612x612&w=0&k=20&c=_19ZmbB5a2wt-AoJKiP53Q7JS_7MS5uJWNDpnxHJjTo="/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Homepage;
