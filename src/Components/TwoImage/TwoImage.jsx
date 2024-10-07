import React from "react";
import "./TwoImage.css";
import sekl1 from "../../Assets/Images/sekl1.webp";
import sekl2 from "../../Assets/Images/sekl2.jpg";

function TwoImage() {
  return (
    <div>
      <div className="img">
        <div
          className="divici"
          style={{ backgroundImage: `url(${sekl2})` }}
        >
          <div className="text-overlay">
            <p>Your Favorites, Restocked</p>
            <h2>Back in Stock</h2>
            <button>Shop Now</button>
            </div>
        </div>
        <div
          className="divici red"
          style={{ backgroundImage: `url(${sekl1})` }}
        >
          <div className="text-overlay">
          <p>Elevated Essentials</p>
            <h2>Dress to Impress</h2>
            <button>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TwoImage;
