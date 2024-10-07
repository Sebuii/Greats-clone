import React, { useState } from "react";
import "./NeedHelpPage.css";
import sekl1 from "../../Assets/Images/needhelpback.png";
import sekl2 from "../../Assets/Images/needbox1.png";
import sekl3 from "../../Assets/Images/needbox2.png";
import sekl4 from "../../Assets/Images/needboox3.png";

import sekl5 from "../../Assets/Images/telefonicon.png";
import sekl6 from "../../Assets/Images/mesajicon.png";

import { BiSolidChat } from "react-icons/bi";

import { CgMenuGridR } from "react-icons/cg";
import { IoList } from "react-icons/io5";

function NeedHelpPage() {
  const [flexible, setFlexible] = useState("fasdas");

  const tikla = (iconClass) => {
    setFlexible((prevIcon) => (prevIcon === iconClass ? "" : iconClass));
  };

  return (
    <div>
      <div className="backgroundneed">
        <img src={sekl1} alt="sekl1" />

        <div className="needimgmain">
          <p>Hi, how many we help you?</p>
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="containerforneed">
        <div className="needpageboxes">
          <div className="needbox">
            <img src={sekl2} alt="sekl" />
            <span>Track order</span>
          </div>
          <div className="needbox">
            <img src={sekl3} alt="sekl3" />
            <span>Return</span>
          </div>
          <div className="needbox">
            <img src={sekl4} alt="sekl4" />
            <span> Report issue</span>{" "}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: " space-between" }}>
          <p className="avaregepar">Get more information</p>
          <div className="buton-flex">
            <CgMenuGridR onClick={() => tikla("fasdas")} className={`iconf fasdas ${flexible === "fasdas" ? "mewclas" : ""}`} />

            <IoList onClick={() => tikla("iconf")} className={`iconf ${flexible === "iconf" ? "mewclas" : ""}`} />
          </div>
        </div>

        {/* grdtemp */}

        <div className={`informboxes ${flexible === "iconf" ? "grdtemp" : ""}`}>
        <div className="informbox">
            <span className="spn1">Shipping</span>
            <span className="spn2">Expedited orders must be placed by 1PM ET to ship the same day.</span>
          </div>
          <div className="informbox">
            <span className="spn1">Returns</span>
            <span className="spn2">Returns have never been easier! Check it out!</span>
          </div>
          <div className="informbox">
            <span className="spn1">Promo Terms & Conditions</span>
          </div>
          <div className="informbox">
            <span className="spn1">Size Information</span>
          </div>
        </div>

        <p className="avaregepar newsa">Get Support</p>

        <div className="contactboxes">
          <div className="contactbox">
            <div className="frstflor">
              <img className="olcsa" src={sekl6} alt="" />
              <span className="spn1">Contact us</span>
            </div>

            <p className="spn2 mras">Contact us at: info@greatsbrand.com</p>
          </div>

          <div className="contactbox">
            <div className="frstflor">
              <BiSolidChat className="olcsa" />
              <span className="spn1">Chat with us</span>
            </div>

            <p className="spn2 mras">We're available on chat 7 days a week, 9am to 10pm ET.</p>
          </div>

          <div className="contactbox">
            <div className="frstflor">
              <img className="olcsa" src={sekl5} alt="sekil" />
              <span className="spn1">Call us</span>
            </div>

            <p className="spn2 mras">We're available 7 days a week, 9am to 10pm ET.</p>
            <p style={{ fontSize: "14px", margin: "10px 0" }}>+1 855 755 0087</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedHelpPage;
