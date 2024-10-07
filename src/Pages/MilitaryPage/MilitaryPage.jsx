import React from "react";
import sekil1 from "../../Assets/Images/militaryback1.png";
import "./MilitaryPage.css";

function MilitaryPage() {
  return (
    <div className="military">
      <img src={sekil1} alt="" />
      <div className="militaryimgmain">
        <p className="milt1">Military appreciation discount</p>
        <p className="milt2">25% off</p>
        <p className="milt3">
          To all active, veteran, retired and reservist personal of the US Armed forces, we want to thank you by offering a 25%
          off discount. Verify your eligibility below to receive your promo code.
        </p>
      </div>
    </div>
  );
}

export default MilitaryPage;
