import React from 'react';
import { Link } from "react-router-dom";
import Payment from "./Payment";

function CarParkingArea() {
  const styles = {
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', // Center align vertically
      flexDirection: 'column', // Stack items vertically
      minHeight: '100vh', // Take up full screen height
      padding: '20px'
    },
    videoFeed: {
      flex: 1, // Take up remaining space
      maxWidth: '70%', // Ensure the video takes full width
      marginBottom: '20px' // Add some space below the video
    },
    videoFeedImg: {
      width: '100%', // Ensure the video takes full width
      height: 'auto',
      border: '2px solid #ccc'
    },
    goNowButton: {
      maxWidth: '300px', // Limit the button width
      width: '100%' // Ensure the button takes full width within the max width
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.videoFeed}>
      <h1 className="text-3xl font-bold text-blue-600">Live Feed</h1>

        <video src="/Carstatus.mp4" style={styles.videoFeedImg} autoPlay controls />
      </div>

      <div>
        <a
          className="input-info w-full max-w-xs btn btn-outline btn-primary"
          onClick={() => document.getElementById("my_modal_7").showModal()}
          style={styles.goNowButton}
        >
          GO NOW
        </a>
        <Payment />
      </div>

      <div className="mr-3 mt-2">
        <Link to="/Help">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarParkingArea;
