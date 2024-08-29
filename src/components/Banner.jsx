import React from "react";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className=" hero min-h-screen" 
      style={{
        backgroundImage: "url(https://i.postimg.cc/DZWjQs5t/pexels-danielrobertdinu-849.jpg)",
      }}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-black">Hello, welcome to {" "}
      <span className="text-blue-800">Festivify</span></h1>
      <p className="mb-5 text-lg font-bold text-black">
      Book your tickets effortlessly for the most exciting events and experiences all in one place.
      </p>

        <Link
            to="/Help"
              className="btn btn-secondary"
            >
          Get Started
        </Link>
    </div>
  </div>
       
      </div>
    </>
  );
}

export default Banner;
