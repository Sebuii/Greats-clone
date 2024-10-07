import React, { useContext, useEffect } from "react";
import "./CartModal.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { CartContext } from "../../Context/CartContext";

function CartModal({ canta, baglamodal }) {
  const { cartItems, getTotal, removeFromCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    if (canta) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [canta]);

  if (!canta) return null;

  return (
    <div className="cart-modal-overlay" onClick={baglamodal}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bag-modal-first">
          <button className="close-modal" onClick={baglamodal}>
            <AiFillCloseCircle className="iosxbtn" />
          </button>
          <h2>
            Cart <span>{cartItems.length}</span>
          </h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="bag-modal-middle-parag">
            <p>Your cart is currently empty.</p>
          </div>
        ) : (
          <div className="bag-modal-paragpahs">
            {cartItems.map((item, index) => (
              <div key={index} className="sel-bag-modal-middle-parag">
                <img
                  src={item.selectedVariation.image}
                  alt={item.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />

                <div className="sel-div-back">
                  <div className="xbtn-display">
                    <p>
                      {item.name} - {item.selectedVariation.color}
                    </p>
                    <div style={{ cursor: "pointer" }} onClick={() => removeFromCart(item.id)}>
                      x
                    </div>
                  </div>

                  <p style={{ marginBottom: "20px" }}>Color: {item.selectedVariation.color}</p>

                  <div className="dispplmn">
                    <div className="sebuimurad">
                      <span style={{ cursor: "pointer" }} onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        -
                      </span>
                      <span>{item.quantity}</span>
                      <span style={{ cursor: "pointer" }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </span>
                    </div>

                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bag-modal-subtotal-div">
          <div className="bag-modal-first">
            <span>Subtotal</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>

          <div className="bag-modal-first">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="button-divi-kimi">
            <div>Empty Cart</div>
          </div>
          <p className="buton-alti">Taxes Calculated at Checkout</p>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
