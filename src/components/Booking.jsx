// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// function Booking() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showQRCode, setShowQRCode] = useState("");

//   const qrCodeUrls = {
//     "1st year (₹ 50)": "/QR_Batch.jpg",
//     "2nd year (₹ 50)": "/QR_Batch.jpg",
//     "3rd year (₹ 50)": "/QR_Batch.jpg",
//     "Passout (₹ 50)": "/QR_Batch.jpg",
//   };

//   const { register, handleSubmit, watch, formState: { errors } } = useForm({
//     defaultValues: {
//       name: "",
//       batch: "",
//       foodPreference: "",
//     }
//   });

//   const selectedBatch = watch("batch");

//   useEffect(() => {
//     setShowQRCode(qrCodeUrls[selectedBatch] || "");
//   }, [selectedBatch]);

//   const onSubmit = async (data) => {
//     setLoading(true);

//     const regInfo = {
//       name: data.name,
//       batch: data.batch,
//       foodPreference: data.foodPreference,
//     };

//     try {
//       console.log('Submitting data:', regInfo);
//       const res = await axios.post("http://localhost:4001/book/booking", regInfo);
//       console.log('Response Data:', res.data);

//       if (res.data && res.data.booking) {
//         toast.success("Ticket booked successfully");
//         localStorage.setItem("Users", JSON.stringify(res.data.booking));
//       } else {
//         console.warn('No booking information received. Skipping storage.');
//       }

//       setShowQRCode(qrCodeUrls[data.batch] || "");
//     } catch (err) {
//       console.error('Submission Error:', err);
//       toast.error("Error: " + (err.response ? err.response.data.message : err.message));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             <Link
//               to="/Help"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_4").close()}
//             >
//               ✕
//             </Link>

//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <div className="card shrink-0 w-full max-w-sm bg-base-50">
//                 <div className="mt-4 space-y-2">
//                   <label className="block">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Enter your Name"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("name", { required: "Name is required" })}
//                   />
//                   {errors.name && (
//                     <span className="text-sm text-red-500 mt-1 block">
//                       {errors.name.message}
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-4 space-y-2">
//                   <label className="block">Batch</label>
//                   <select
//                     className="select select-bordered select-info w-full max-w-xs"
//                     {...register("batch", { required: "Batch is required" })}
//                   >
//                     <option value="">Select your batch</option>
//                     <option value="1st year (₹ 50)">1st year (₹ 50)</option>
//                     <option value="2nd year (₹ 50)">2nd year (₹ 50)</option>
//                     <option value="3rd year (₹ 50)">3rd year (₹ 50)</option>
//                     <option value="Passout (₹ 50)">Passout (₹ 50)</option>
//                   </select>
//                   {errors.batch && (
//                     <span className="text-sm text-red-500 mt-1 block">
//                       {errors.batch.message}
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-4 space-y-2">
//                   <label className="block">Food Preference</label>
//                   <select
//                     className="select select-bordered select-info w-full max-w-xs"
//                     {...register("foodPreference", { required: "Food preference is required" })}
//                   >
//                     <option value="">Select your food preference</option>
//                     <option value="Vegetarian">Vegetarian</option>
//                     <option value="Non-Vegetarian">Non-Vegetarian</option>
//                   </select>
//                   {errors.foodPreference && (
//                     <span className="text-sm text-red-500 mt-1 block">
//                       {errors.foodPreference.message}
//                     </span>
//                   )}
//                 </div>

//                 {showQRCode && (
//                   <div className="mt-4 mb-4">
//                     <label className="block text-gray-700">Scan QR Code to buy ticket</label>
//                     <img src={showQRCode} alt="QR Code" className="w-50 h-50" />
//                   </div>
//                 )}

//                 <div className="btn btn-accent">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
                
//               </div>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Booking;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";

// function Booking() {
//   const location = useLocation();
//   const [loading, setLoading] = useState(false);

//   const [showQRCode, setShowQRCode] = useState("");
//   const qrCodeUrls = {
//     "1st year (₹ 50)": "/QR_Batch.jpg",
//     "2nd year (₹ 50)": "/QR_Batch.jpg",
//     "3rd year (₹ 50)": "/QR_Batch.jpg",
//     "Passout (₹ 50)": "/QR_Batch.jpg",
//   };

//   const { register, handleSubmit, formState: { errors }, watch } = useForm({
//     defaultValues: {
//       name: "",
//       batch: "",
//       foodPreference: "",
//     }
//   });

//   React.useEffect(() => {
//     const selectedBatch = watch("batch");
//     setShowQRCode(qrCodeUrls[selectedBatch] || "");
//   }, [watch, qrCodeUrls]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     const regInfo = {
//       name: data.name,
//       batch: data.batch,
//       foodPreference: data.foodPreference,
//     };

//     try {
//       const res = await axios.post("http://localhost:4001/book/booking", regInfo);
//       if (res.data) {
//         toast.success("Parking slot booked successfully");
//         document.getElementById("my_modal_4").close();
//         document.getElementById("my_modal_7").close();
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//         handleDownload(data);  // Call handleDownload with form data
//       }
//     } catch (err) {
//       if (err.response) {
//         toast.error("Error: " + err.response.data.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             <Link
//               to="/Help"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_4").close()}
//             >
//               ✕
//             </Link>

//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <div className="card shrink-0 w-full max-w-sm bg-base-50">
//                 {/* Name */}
//                 <div className="mt-4 space-y-2">
//                   <span>Full Name</span>
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="Enter your Name"
//                     className="input input-bordered input-info w-full max-w-xs"
//                     {...register("name", { required: true })}
//                   />
//                   {errors.name && (
//                     <span className="text-sm text-red-500 mt-1 block">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* Batch */}
//                 <div className="mt-4 space-y-2">
//                   <span>Batch</span>
//                   <br />
//                   <select
//                     className="select select-bordered select-info w-full max-w-xs"
//                     {...register("batch", { required: true })}
//                   >
//                     <option value="">Select your batch</option>
//                     <option value="1st year (₹ 50)">1st year (₹ 50)</option>
//                     <option value="2nd year (₹ 50)">2nd year (₹ 50)</option>
//                     <option value="3rd year (₹ 50)">3rd year (₹ 50)</option>
//                     <option value="Passout (₹ 50)">Passout (₹ 50)</option>
//                   </select>
//                   {errors.batch && (
//                     <span className="text-sm text-red-500 mt-1 block">
//                       This field is required
//                     </span>
//                   )}
//                 </div>

//                 {/* FoodPreference */}
//                 <div className="mt-4 space-y-2">
//                   <span>Food Preference</span>
//                   <br />
//                   <select
//                     className="select select-bordered select-info w-full max-w-xs"
//                     {...register("foodPreference", { required: true })}
//                   >
//                     <option value="">Select your food preference</option>
//                     <option value="Vegetarian">Vegetarian</option>
//                     <option value="Non-Vegetarian">Non-Vegetarian</option>
//                   </select>
//                   {errors.foodPreference && (
//                     <span className="text-sm text-red-500 mt-1 block">
//                       This field is required
//                     </span>
//                   )}
//                 </div>
//                 {showQRCode && (
//                   <div className="mt-4 mb-4">
//                     <label className="block text-gray-700">Scan QR Code to buy ticket</label>
//                     <img src={showQRCode} alt="QR Code" className="w-50 h-50" />
//                   </div>
//                 )}
                

//                 {/* Buttons */}
//                 <div className="pt-5 flex flex-col space-y-2">
//                   <button
//                     className="btn btn-accent"
//                     type="submit"
//                     disabled={loading}
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Booking;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Booking() {
  const [loading, setLoading] = useState(false);
  const [showQRCode, setShowQRCode] = useState("");
  const qrCodeUrls = {
    "1st year (₹ 50)": "/QR_Batch.jpg",
    "2nd year (₹ 50)": "/QR_Batch.jpg",
    "3rd year (₹ 50)": "/QR_Batch.jpg",
    "Passout (₹ 50)": "/QR_Batch.jpg",
  };

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: "",
      batch: "",
      foodPreference: "",
      paymentProof: null,
    }
  });

  React.useEffect(() => {
    const selectedBatch = watch("batch");
    console.log("Selected Batch:", selectedBatch); // Debugging
    const qrCodeUrl = qrCodeUrls[selectedBatch] || "";
    console.log("QR Code URL:", qrCodeUrl); // Debugging
    setShowQRCode(qrCodeUrl);
  }, [watch("batch")]); // Ensure dependencies are correct

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("batch", data.batch);
    formData.append("foodPreference", data.foodPreference);
    formData.append("paymentProof", data.paymentProof[0]);

    try {
      const res = await axios.post("https://festivify-1.onrender.com/book/booking", formData);
      if (res.data) {
        toast.success("Uploaded successfully");
        document.getElementById("my_modal_4").close();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <Link
              to="/Help"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              ✕
            </Link>

            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card shrink-0 w-full max-w-sm bg-base-50">
                {/* Name */}
                <div className="mt-4 space-y-2">
                  <span>Full Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500 mt-1 block">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Batch */}
                <div className="mt-4 space-y-2">
                  <span>Batch</span>
                  <br />
                  <select
                    className="select select-bordered select-info w-full max-w-xs"
                    {...register("batch", { required: true })}
                  >
                    <option value="">Select your batch</option>
                    <option value="1st year (₹ 50)">1st year (₹ 50)</option>
                    <option value="2nd year (₹ 50)">2nd year (₹ 50)</option>
                    <option value="3rd year (₹ 50)">3rd year (₹ 50)</option>
                    <option value="Passout (₹ 50)">Passout (₹ 50)</option>
                  </select>
                  {errors.batch && (
                    <span className="text-sm text-red-500 mt-1 block">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Food Preference */}
                <div className="mt-4 space-y-2">
                  <span>Food Preference</span>
                  <br />
                  <select
                    className="select select-bordered select-info w-full max-w-xs"
                    {...register("foodPreference", { required: true })}
                  >
                    <option value="">Select your food preference</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                  </select>
                  {errors.foodPreference && (
                    <span className="text-sm text-red-500 mt-1 block">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Payment Proof */}
                <div className="mt-4 space-y-2">
                  <span>Payment Proof</span>
                  <br />
                  <input
                    type="file"
                    className="input input-bordered input-info w-full max-w-xs"
                    {...register("paymentProof", { required: true })}
                  />
                  {errors.paymentProof && (
                    <span className="text-sm text-red-500 mt-1 block">
                      Payment proof is required
                    </span>
                  )}
                </div>

                {showQRCode && (
                  <div className="mt-4 mb-4">
                    <label className="block text-gray-700">Scan QR Code to buy ticket</label>
                    <img src={showQRCode} alt="QR Code" className="w-50 h-50" />
                    <p className="text-xs text-gray-600 mt-2">
                        <strong>Disclaimer:</strong> Tickets are non-refundable and non-transferable. 
                        Please ensure all details are correct before purchasing. By buying a ticket,
                        you agree to comply with the event's terms and conditions. 
                        For any issues or inquiries, contact the event organizers.
                      </p>
                  </div>
                )}
                

                {/* Buttons */}
                <div className="pt-5 flex flex-col space-y-2">
                  <button className="btn btn-accent" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Booking;

