import React, { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="line top-line"></div>
      <div className="line middle-line"></div>
      <div className="line bottom-line"></div>
    </div>
  );
}

export default HamburgerMenu;
