import React from "react";
import Payment from "./Payment";
// import Booking from "./Booking";
// import React, { useEffect } from "react";
// import { useState } from "react";

function Cards() {
  return (
      <>
        
           <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-black dark:border">

                    <div className="card w-50 bg-base-100 shadow-xl"
                    style={{
                      backgroundImage: "url(https://i.postimg.cc/bwg9jQxn/plain-smooth-green-wall-texture.jpg) ",
                    }}>
                    <figure className="px-8 pt-11">
                      <img src="https://i.postimg.cc/3NpQkvzZ/26691.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="text-white card-body items-center text-center">
                      <h2 className="card-title">Syntaxia-2K24</h2>
                      <p className="font-bold"><p className="font-bold">Get ready for Syntaxia-2k24!
                         The Department of Computer Science, Asutosh College.
                      </p>
                       </p>
                      <div className="card-actions">
                      <div className="">
                <a
                  className="btn btn-accent"
                  //onClick={() =>
                    //document.getElementById("my_modal_7").showModal()
                  //}
                >
                  Book Your Ticket
                </a>
              
              </div>
                      </div>
                    </div>
                </div>
            </div>
            <Payment/>
        </div>
        
      </>
  );
}

export default Cards;
