import React from "react";
import { Link } from "react-router-dom";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes To{" "}
              <span className="text-pink-500">AutoParkIQ!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Park your vehicle quick.Rent your place for parking and make 
              your city traffic free. The best parking app to save your time.
            </p>
            
          </div>
          <div className="mt-10">
                
                <Link
                  to="/Help"
                  className="btn btn-secondary"
                >
                  Get Started
                </Link>
                </div>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
             src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="it is an image"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
