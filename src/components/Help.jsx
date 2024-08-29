import React from "react";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function Help() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className="" 
      style=
      {{
        backgroundImage: "url(https://i.postimg.cc/2jxmXLDP/pexels-codioful-7135019.jpg)",
           backgroundSize: "cover",          // Ensures the image covers the entire area
    backgroundPosition: "center",     // Centers the image within the container
    backgroundRepeat: "no-repeat",    // Prevents the image from repeating
    backgroundAttachment: "fixed",      
      }}>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content text-center">
      <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-gray-800 text-3xl">
          Choose your event and book tickets effortlessly with Festivify
          </h1>
          
          <Link to="/">
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
       
       
        </div>
       
           <div>
         <Slider {...settings}>
               <Cards2 />
               <Cards />
               <Cards3 />
               
        </Slider> 
        </div>
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              <Cards/>
        </div> */}
      
{/*         
        <div className="flex justify-around  ">

        <div className="mt-4 my-3 p-8  container ">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                 <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Go Now</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        {/* second items */}
        {/* <div className="mt-4 my-3 p-8   container">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                          <div className="card w-50 bg-base-100 shadow-xl">
                    <figure className="px-8 pt-8">
                      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Go Now</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        </div>  */}
       
       </div>
    </>
  );
}

export default Help;
