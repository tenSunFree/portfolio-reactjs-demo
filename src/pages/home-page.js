import React from "react";
import reserve from "../assets/images/icon_reserve.png";
import midAutumn from "../assets/images/icon_mid_autumn.jpg";

function HomePage() {
  return (
    <div
      className="bg-gradient-to-r text-white overflow-hidden mr-40 ml-40"
      style={{
        backgroundColor: "rgba(250,246,241,1.000)", 
      }}
    >
      <div
        className="w-full relative "
        style={{
          paddingBottom: "41.56%",
          top: "215px",
          right: "40px",
          left: "0px",
          marginRight: "40px",
          backgroundColor: "rgba(250,246,242,1.000)", 
        }}
      >
        <img
          className="w-full"
          src={midAutumn}
          alt="midAutumn"
        />
        <img
          className="w-full"
          src={reserve}
          alt="reserve"
        />
      </div>
    </div>
  );
}
export default HomePage;
