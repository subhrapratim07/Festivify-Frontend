import React from "react";
import Booking from "./Booking";


function Cards2() {
  return (
      <>
           <div className=" mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-black dark:border">
                     
                    <div className="card w-50 bg-base-100 shadow-xl"
                    style={{
                      backgroundImage: "url(https://i.postimg.cc/bwg9jQxn/plain-smooth-green-wall-texture.jpg) ",
                    }}>
                    
                    <figure className="px-8 pt-11">
                      <img src="https://i.postimg.cc/KYGLjns7/teachers-day.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="text-white card-body items-center text-center">
                      <h2 className="card-title ">Teachers Day 2024</h2>
                      <p className="font-bold">Join us in celebrating Teachers' Day on 5th September 2024 from 11 AM to 4 PM.
                       </p>
                      
                      
                      <div className="card-actions">
                      <div className="">
                <a
                  className="btn btn-accent"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Book Your Ticket
                </a>
              
                  </div>  
                   </div>
                    </div>
                </div>
            </div>
            <Booking />
        </div>
      </>
  );
}

export default Cards2;
