import React from "react";
import Video2 from "../../Assets/Videos/homevideo2.mp4";
import "./HomeVideo2.css";

function HomeVideo2() {
  return (
    <div className="video-container2">
      <div className="video">
        <video autoPlay muted loop src={Video2} type="video/mp4"></video>
      </div>

      <div className="div-text">
        <h1>Step Into Comfort</h1>
        <p>
          Handcrafted in Portugal with premium goat leather that hugs and contours to your foot, The Kingston and The Brighton is
          incredibly light weight and flexible.
        </p>
        <div className="div-text-butons">
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo2;
