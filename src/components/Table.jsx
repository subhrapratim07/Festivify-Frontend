// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';

// // Styles for the modal
// const modalStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     transform: 'translate(-50%, -50%)',
//     padding: '20px',
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: 'white',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// };

// Modal.setAppElement('#root'); // Set the root element for accessibility

// const Table = () => {
//   const [bookings, setBookings] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('http://localhost:4001/book/booking');
//         setBookings(response.data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//         setError('Failed to fetch bookings. Please try again later.');
//       }
//     };

//     fetchBookings();
//   }, []);

//   const openModal = (imageSrc) => {
//     setSelectedImage(imageSrc);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedImage(null);
//   };

//   const handleNavigateToHelp = () => {
//     navigate('/help'); // Navigate to the Help page
//   };

//   return (
//     <div className="overflow-x-auto">
//       {error && <div className="text-red-500">{error}</div>}
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead className="bg-gray-100 border-b">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Batch</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Food Preference</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Proof</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <tr key={booking._id} className="border-b">
//                 <td className="px-6 py-4 text-sm text-gray-900">{booking.name}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{booking.batch}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">{booking.foodPreference}</td>
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   {booking.paymentProof && booking.paymentProof.data ? (
//                     <img 
//                       src={`data:${booking.paymentProof.contentType};base64,${booking.paymentProof.data}`} 
//                       alt="Payment Proof"
//                       className="w-20 h-20 object-contain cursor-pointer"
//                       onClick={() => openModal(`data:${booking.paymentProof.contentType};base64,${booking.paymentProof.data}`)}
//                     />
//                   ) : (
//                     <span>No payment proof</span>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="px-6 py-4 text-sm text-gray-900 text-center">No bookings found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Modal for displaying the image */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={modalStyles}
//       >
//         <button 
//           onClick={closeModal} 
//           className="text-gray-600 absolute top-2 right-2 text-2xl"
//         >
//           &times;
//         </button>
//         {selectedImage && (
//           <img 
//             src={selectedImage} 
//             alt="Payment Proof" 
//             className="w-full h-auto"
//           />
//         )}
//       </Modal>

//       {/* Button to navigate to Help page */}
//       <button 
//         onClick={handleNavigateToHelp} 
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Go to Help Page
//       </button>
//     </div>
//   );
// };

// export default Table;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

// Styles for the modal
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#root'); // Set the root element for accessibility

const Table = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState('');
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://festivify-1.onrender.com/book/booking');
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch bookings. Please try again later.');
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    if (selectedBatch) {
      const filtered = bookings.filter((booking) => booking.batch === selectedBatch);
      setFilteredBookings(filtered);
    } else {
      setFilteredBookings(bookings);
    }
  }, [selectedBatch, bookings]);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };


  return (
    <div className="overflow-x-auto p-4">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="batch-select" className="block text-sm font-medium text-gray-700">Select Batch</label>
        <select
          id="batch-select"
          value={selectedBatch}
          onChange={handleBatchChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select your batch</option>
          <option value="1st year (₹ 50)">1st year </option>
          <option value="2nd year (₹ 50)">2nd year </option>
          <option value="3rd year (₹ 50)">3rd year </option>
          <option value="Passout (₹ 50)">Passout </option>
        </select>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Batch</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Food Preference</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">Payment Proof</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <tr key={booking._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 text-sm text-gray-900">{booking.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{booking.batch}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{booking.foodPreference}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {booking.paymentProof && booking.paymentProof.data ? (
                    <div>
                      <img
                        src={`data:${booking.paymentProof.contentType};base64,${booking.paymentProof.data}`}
                        alt="Payment Proof"
                        className="w-20 h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                        style={{ maxWidth: '80px', maxHeight: '80px' }} // Constrain image size
                        onClick={() => openModal(`data:${booking.paymentProof.contentType};base64,${booking.paymentProof.data}`)}
                      />
                      
                    </div>
                  ) : (
                    <span>No payment proof</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-sm text-gray-900 text-center">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for displaying the image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button
          onClick={closeModal}
          className="text-gray-600 absolute top-2 right-2 text-2xl"
        >
          &times;
        </button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Payment Proof"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '80vh' }} // Prevent image from being too large
          />
        )}
      </Modal>

      {/* Button to navigate to Help page */}
      <div className="flex justify-around mt-6">
              
              <p>
                
                <Link
                  to="/Help"
                  
                >
                  <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Go Back
              </button>
                </Link>{" "}
              </p>
            </div>
    </div>
  );
};

export default Table;



