import React from 'react';
import "./ReferFriendPage.css";
import sekil from "../../Assets/Images/referfriend.png";

function ReferFriendPage() {
  return (
    <div className='ReferFriendPage'>
      <img src={sekil} alt="sejk" />


      <div className="imgform">
        <p className="imgform-heading">GIVE $30, GET $30</p>
        <p className="imgform-description">
          Friends? Frenemies? Become Friends with Benefits and give them $30 OFF their first order. You’ll get $30 off your next order when they make a purchase.
        </p>
        <input type="text" placeholder='Your email address' className="imgform-input" />
        <button className="imgform-button">Next</button>
      </div>


      
    </div>
  )
}

export default ReferFriendPage;
