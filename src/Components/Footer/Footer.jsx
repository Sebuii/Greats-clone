import React, { useState } from "react"; // useState'i import et
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import futrsekl from "../../Assets/Images/futursekl.png";
import tezeft from "../../Assets/Images/tezeft.png";
import { GoTriangleDown } from "react-icons/go";

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  const [activeSection, setActiveSection] = useState("");

  const tikla = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <div className="enkeftr">
      <div className="footer">
        <div className="ftmain1">
          <p className="prg1">Stay in the Know</p>
          <p className="prg2">Sign up to get first dibs on new launches, promos, 20% off your first purchase, and other news.</p>
          <div className="input-container">
            <input type="text" placeholder="Enter Email" />
            <button>Sign Up</button>
          </div>
        </div>

        <div className="ftmain2">
          <div className="takmak1">
            <div onClick={() => tikla("aboutUs")} className="picon">
              <p className="baslq">About Us</p>
              <GoTriangleDown className="triangle-icon" />
            </div>
            <div className={`ftdisp mrgg ${activeSection === "aboutUs" ? "newclass" : ""}`}>
              <Link to="our-story">
                <p className="prg2">Our Story</p>
              </Link>
              <Link to="theplaybook">
                <p className="prg2">The Playbook</p>
              </Link>
            </div>
            <div className={`ftdisp ${activeSection === "aboutUs" ? "newclass" : ""}`}>
              <Link to="/reviews">
                <p className="prg2">Reviews</p>
              </Link>
              <Link to="/military">
                {" "}
                <p className="prg2">Military Discount</p>{" "}
              </Link>
            </div>
          </div>

          <div className="takmak1">
            <div onClick={() => tikla("customerService")} className="picon">
              <p className="baslq">Customer Service</p>
              <GoTriangleDown className="triangle-icon" />
            </div>
            <div className={`ftdisp mrgg ${activeSection === "customerService" ? "newclass" : ""}`}>
              <Link to="needhelp">
                <p className="prg2">Need Help?</p>
              </Link>

              <Link to="returns">
                <p className="prg2">Returns</p>
              </Link>
            </div>
            <div className={`ftdisp ${activeSection === "customerService" ? "newclass" : ""}`}>
              <Link to="sizeguide">
                <p className="prg2">Size Guide</p>
              </Link>
              <Link>
                <p className="prg2">Gift Cards</p>
              </Link>
            </div>
            <div className={`ftdisp ${activeSection === "customerService" ? "newclass" : ""}`}>
              <Link to="/shipping">
                {" "}
                <p className="prg2">Shipping</p>
              </Link>
              <Link to="/referfriend">
                <p className="prg2">Refer A Friend</p>
              </Link>
            </div>
            <div className={`ftdisp ${activeSection === "customerService" ? "newclass" : ""}`}>
              <Link to="/accessibility">
                <p className="prg3">Accessibility</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="endy">
        <div className="futicons">
          <a target="blank" href="https://www.instagram.com/greats/?hl=en">
            <FaInstagram style={{ width: "22px", height: "22px" }} />
          </a>
          <a target="blank" href="https://www.facebook.com/GreatsBrand/">
            <FaFacebookF style={{ width: "22px", height: "22px" }} />
          </a>
          <a target="blank" href="https://x.com/greatsbrand?lang=en">
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          <a target="blank" href="https://www.youtube.com/channel/UC6aQTqGoLwQNiVTlBh9eZhQ">
            <FaYoutube style={{ width: "22px", height: "22px" }} />
          </a>
        </div>
        <div className="rightfut">
          <span className="spmimg">
            <img src={futrsekl} alt="sekl" />® 2024 All Rights Reserved.
          </span>
          <div className="spans">
            <span>
              <a href="https://www.greats.com/pages/privacy-policy">Privacy Policy</a>
            </span>

            <span>
              {" "}
              <a href="https://www.greats.com/pages/terms-and-conditions">Terms & Conditions</a>{" "}
            </span>
            <span>
              {" "}
              <img className="ozimg" src={tezeft} alt="tezedi" />
              Your Privacy Choices
            </span>
            <span>
              <a href="https://www.greats.com/pages/privacy-policy">Data Privacy Portal</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
