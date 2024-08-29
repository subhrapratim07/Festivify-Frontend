import React from "react";
import Verify from "./Verify";


function Cards3() {
  return (
      <>
           <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

                          <div className="card w-50 bg-base-100 shadow-xl"
                          style={{
                            backgroundImage: "url(https://i.postimg.cc/bwg9jQxn/plain-smooth-green-wall-texture.jpg) ",
                          }}>
                    <figure className="px-8 pt-11">
                      <img src="https://i.postimg.cc/3NpQkvzZ/26691.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="text-white card-body items-center text-center">
                      <h2 className="card-title">Alumni-2K24</h2>
                      <p className="font-bold">Get ready for reunion! The Asutosh College Department of Computer Science Alumni 2K24</p>
                      <div className="">
                <a
                  className="btn btn-accent"
                  //onClick={() =>
                    //document.getElementById("my_modal_5").showModal()
                  //}
                >
                  Book Your Ticket
                </a>
                    
              </div>
                    </div>
                    
                </div>
                <Verify />
            </div>
        </div>
      </>
  );
}

export default Cards3;
