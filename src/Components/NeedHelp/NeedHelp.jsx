import React, { useState } from "react";
import "./NeedHelp.css";
import { RiCloseLargeLine } from "react-icons/ri";

const NeedHelp = () => {
  const [need, setNeed] = useState(false);

  const tikla = () => {
    setNeed(!need);
};

  return (
    <>
      <div onClick={() => tikla()} className="need-help">
        Need <br /> help?
      </div>

      {need && (



        <div className="needdivi">
          <i className="iconsneedpg">
            <RiCloseLargeLine style={{cursor: "pointer"}} onClick={() => tikla()} />
          </i>

          <p>Found Something You</p>
          <p>Like But It's Out Of</p>
          <p>Stock?</p>

          <span style={{ marginTop: "30px" }}>
            We're currently moving to a new fulfillment center, which is causing some styles to be temporarily unavailable online.
          </span>
          <span>
            Sign up for a back-in-stock alert to be notified when a particular style is available again, and make sure to check
            back in early October for exciting new drops!
          </span>
          <span>Thanks for your patience — we promise it'll be worth the wait.</span>

          <div style={{cursor: "pointer"}} onClick={() => tikla()}  >keep browsing</div>
        </div>



      )}
    </>
  );
};

export default NeedHelp;
