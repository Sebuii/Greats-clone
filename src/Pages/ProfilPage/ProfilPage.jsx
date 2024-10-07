import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./ProfilPage.css";

function ProfilPage() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showAdresses, setShowAdresses] = useState("Account");

  const [gosterbtn, setGosterbtn] = useState(false);

  const handleLogout = () => {
    logout();
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const tiklamaaa = (cataloq) => {
    setShowAdresses(cataloq);
  };

  const gosterinforminp = () => {
    console.log("qdqwd");
    setGosterbtn(!gosterbtn);
  };

  return (
    <div className="profil-page-container">
      <div className="navvciki">
        <div>
          <span onClick={() => tiklamaaa("Account")}> My Account</span>
        </div>

        <div>
          <span onClick={() => tiklamaaa("Addresses")}> My Addresses</span>
        </div>

        <div>
          <span onClick={() => tiklamaaa("Order")}>Order History</span>
        </div>

        <span onClick={handleLogout}>Logout</span>
      </div>

      {showAdresses === "Account" && (
        <div className="acilan-profil-divi">
          <p>My Account</p>

          <div className="profildivleri">
            <div className="profil-boxu1">
              <p>Default Address</p>
              <span>View Addresses</span>
            </div>
            <div className="profil-boxu2">
              <p>Recent Orders</p>
              <span>You haven't placed any orders yet.</span>
            </div>
          </div>
        </div>
      )}

      {showAdresses === "Addresses" && (
        <div className="acilan-profil-divi">
          <button className="profil-ozel-btn" onClick={() => gosterinforminp()}>
            add a new address
          </button>
        </div>
      )}

      {showAdresses === "Order" && (
        <div className="acilan-profil-divi">
          <div className="profildivleri">
            <div className="profil-boxu1 mesafedvs">
              <p className="orderinpsi">Order History</p>
              <span>You haven't placed any orders yet.</span>
            </div>
          </div>
        </div>
      )}

      {gosterbtn && (
        <div className="add-new-adres-inps acilan-profil-divi">
          <p>Add a New Address</p>

          <div className="adres-inps-flex">
            <div className="adres-inps-colum">
              <span>First Name</span>
              <input type="text" />
            </div>
            <div className="adres-inps-colum">
              <span>Last Name</span>
              <input type="text" />
            </div>
          </div>

          <div className="adres-inps-colum">
            <span>Company</span>
            <input type="text" />
          </div>
          <div className="adres-inps-colum">
            <span>Address1</span>
            <input type="text" />
          </div>

          <div className="adres-inps-flex">
            <div className="adres-inps-colum">
              <span>Address2</span>
              <input type="text" />
            </div>
            <div className="adres-inps-colum">
              <span>Country</span>
              <input placeholder="United States" type="text" />
            </div>
          </div>

          <div className="adres-inps-flex">
            <div className="adres-inps-colum">
              <span>City</span>
              <input type="text" />
            </div>
            <div className="adres-inps-colum">
              <span>Province</span>
              <input placeholder="Alabama" type="text" />
            </div>
          </div>

          <div className="adres-inps-flex">
            <div className="adres-inps-colum">
              <span>Postal/Zip Code</span>
              <input type="text" />
            </div>
            <div className="adres-inps-colum">
              <span>Phone</span>
              <input placeholder="Alabama" type="text" />
            </div>
          </div>

          <div className="profiles-butons">
            <button className="profil-ozel-btn">add a new address</button>
            <button onClick={() => setGosterbtn(false)} className="profil-ozel-btn">cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilPage;
