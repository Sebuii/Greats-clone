import React from "react";
import Video from "../../Assets/Videos/homevideo.mp4";
import "./HomeVideo.css";
import { Link } from "react-router-dom";

function HomeVideo() {
  return (
    <div className="video-container">
      <div className="video">
        <video autoPlay muted loop src={Video} type="video/mp4"></video>
      </div>

      <div className="overlay">
        <h1>Just Landed</h1>
        <p>
          Introducing The Regent 2.0, handcrafted with an innovative corn-based leather alternative to create the refined look you
          love, while supporting the environment.
        </p>
        <div className="overlay-butons">
          <Link to="/men" >
            <button className="btn">Shop Men</button>
          </Link>{" "}
          <Link to="women" ><button className="btn">Shop Women</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo;
