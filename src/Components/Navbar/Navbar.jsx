import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/Images/Logo.png";
import Axtaris from "../../Assets/Images/Axtaris.png";
// import Canta from "../../Assets/Images/Canta.png";
import Profil from "../../Assets/Images/Profil.png";
import Angle from "../../Assets/Images/angle.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import ScrollingText from "../ScrollDiv/ScrollingText";
import { Link } from "react-router-dom";
import CartModal from "../CartModal/CartModal";
import { CartContext } from "../../Context/CartContext";
import shoesDataForNewPage from "../ShoesData/ShoesDataForNewPage";
import AuthContext from "../../Context/AuthContext";

const links = [
  { name: "New", path: "/new" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Accessories", path: "/accessories" },
  { name: "Sale", path: "/sale" },
  { name: "Our Story", path: "/our-story" },
];

function Navbar() {
  const { cartItems, cartSpanClass } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext); 


  const [open, setOpen] = useState(false);

  const [acspan, setAcspan] = useState(false);

  const [input, setInput] = useState("");

  // const [openli, setOpenli] = useState(false);



  const tikla = () => {
    setOpen(!open);
  };



  const [canta, setCanta] = useState(false);

  const baglamodal = () => {
    setCanta(false);
  };











  const searctik = () => {



    console.log("qwdqwudj");

 


  };








  const spantik = (name) => {
    console.log("dqwdqwdjiqwiodj");

    setAcspan((acspan) => (acspan === name ? "" : name));
  };

  const inputagorefilter = shoesDataForNewPage.filter((item) =>
    item.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())
  );

  const inputatikla = (e) => {
    setInput(e.target.value);
    console.log("mrmmrmrd");
  };

  return (
    <div>
      <ScrollingText />

      <div className="navbar-container height-div">
        <div className="navbar">
          <div className="menu">
            <div onClick={() => tikla()}>
              <HamburgerMenu className="navbar-line" />
            </div>
            <Link onClick={() => setOpen(false)} to="/">
              <img src={Logo} alt="logo" loading="lazy" />
            </Link>
            <div className={`menu-links ${open ? "show" : ""}`}>
              {links.map((item, index) => (
                <Link onClick={() => setOpen(false)} to={item.path} key={index}>
                  <span
                    className={`navbarnspanni ${acspan === item.name ? "navspanadd" : ""}`}
                    onClick={() => spantik(item.name)}
                  >
                    {item.name}
                    {item.name === "Men" || item.name === "Women" || item.name === "Accessories" ? (
                      <img src={Angle} alt="angle" />
                    ) : (
                      ""
                    )}
                  </span>
                </Link>
              ))}
              <div className="login">


              <Link onClick={() => setOpen(false)}  to={isLoggedIn ? "/profile" : "/login"}>
              <span>Login</span>
              </Link>



                {/* <span>Login</span> */}







                





                <Link onClick={() => setOpen(false)} to="/shipping">
                {" "}
                <span>Customer Service</span>
              </Link>





              </div>
            </div>
            <div className="navicons">

              




              {<img onClick={() => searctik()} className="axtaris-icon" src={Axtaris} alt="search" loading="lazy" />}
              <input  placeholder="Search" type="text" value={input} onChange={inputatikla} />




              {input && (
                <ul className="acilaninputdivi">
                  <div className="divsvgp inputpar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" fill="#9b9b9b" viewBox="0 0 512 512">
                      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                    <span>Popular Searches</span>
                  </div>



                  {inputagorefilter.length > 0 ? (
                    inputagorefilter.map((item, index) => (
                      <Link to={`/product/${item.id}`}>
                        <li className="inputdivikart" key={index}>
                          {item.variations.length > 0 && (
                            <>
                              <img
                                src={item.variations[0].image}
                                alt="seklq"
                                style={{ width: "70px", height: "70px", marginRight: "5px" }}
                              />

                              <div className="inputmainn">
                                <div className="fontdiv">
                                  <span>{item.name}&nbsp;</span>
                                  <span> - {item.variations[0].color}</span>
                                </div>
                                <p className="colorinprc">${item.price}.00</p>
                              </div>
                            </>
                          )}
                        </li>
                      </Link>
                    ))
                  ) : (
                    <li>Not Found</li>
                  )}
                </ul>
              )}











<Link to={isLoggedIn ? "/profile" : "/login"}>
                <img className="profil-image" src={Profil} alt="profil" loading="lazy" />
              </Link>











              {/* <img
                onClick={() => setCanta(true)} // Çanta simgesine tıklandığında modal'ı aç
                src={Canta}
                alt="bag"
                loading="lazy"
              /> */}
              <div onClick={() => { setCanta(true); setOpen(false); }} style={{ position: "relative", display: "inline-block", cursor: "pointer" }}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="icon_bg"
                    d="M21.8393 6.16113H4V24.0004H21.8393V6.16113Z"
                    stroke="#231F20"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M8.72363 7.78088V4.64563C8.72577 3.67941 9.11055 2.75337 9.79378 2.07015C10.477 1.38692 11.403 1.00214 12.3693 1H13.1308C14.0998 1 15.0292 1.38495 15.7144 2.07015C16.3996 2.75536 16.7845 3.68471 16.7845 4.65374V7.78088"
                    stroke="#231F20"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  ></path>
                </svg>

                <span
                  className={cartSpanClass}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "12px",
                    color: "black",
                  }}
                >
                  {cartItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartModal canta={canta} baglamodal={baglamodal} />
    </div>
  );
}

export default Navbar;
