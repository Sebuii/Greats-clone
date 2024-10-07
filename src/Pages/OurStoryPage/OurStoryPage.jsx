import React from "react";
import "./OurStoryPage.css";
import sekil1 from "../../Assets/Images/ourpageimg.png";
import sekil2 from "../../Assets/Images/sekildesekil1.png";

import sekil3 from "../../Assets/Images/ourbalacasekl1.png";
import sekil4 from "../../Assets/Images/ourbalacasekl2.png";

function OurStoryPage() {
  return (
    <div className="ourpage">
      <img className="ourimgg" src={sekil1} alt="sekil1" />
      <img className="ourimgbalaca bal1" src={sekil3} alt="swkl" />
      <div className="ourheader">
      <h2>Born in Brooklyn. Artisanally Crafted. Worn Everywhere.</h2>
      <p>
        Founded in 2014, GREATS is the first sneaker brand born in Brooklyn. Our commitment to you is to create sneakers with a
        superior fit and feel that's built to last. Our goal is to ethically transform premium materials into an experience that
        moves you. We make shoes that last a lifetime and we like to make them in a responsible way.
      </p>
      </div>
      <img className="ourimg2 ourimgg" src={sekil2} alt="sekil2" />
      <img className="ourimgbalaca bal2" src={sekil4} alt="selk" />
    </div>
  );
}

export default OurStoryPage;
