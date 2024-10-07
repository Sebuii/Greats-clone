import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import shoesData from "../../Components/ShoesData/ShoesDataForNewPage";
import "./ProductDetail.css";
import sekl1 from "../../Assets/Images/productPage.png";
import sekl2 from "../../Assets/Images/skl2222.png";
import { CartContext } from "../../Context/CartContext";

function ProductDetail() {
  const { addToCart, isCartModalOpen, closeCartModal, cartItems, getTotal } = useContext(CartContext);

  const { sebui } = useParams();
  const product = shoesData.find((item) => item.id === Number(sebui));

  const initialVariation = product.variations[0];
  const initialColor = product.variations[0].color;

  const [selectedSize, setSelectedSize] = useState(null); 

  const [mevcutVaryasyon, setMevcutVaryasyon] = useState(initialVariation);
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="product-detail">
        <div className="product-images">
          <img className="prodasecndimg4" src={mevcutVaryasyon.image} alt={product.name} />
          <img className="prodasecndimg" src={mevcutVaryasyon.hoverImage} alt={product.name} />

          <div className="two-rewievs">
            <p className="descpd-heading">WHAT MAKES THEM GREAT</p>
            <div className="descd-number-1">
              {product.whatMakesThemGreat.map((item, index) => (
                <div key={index} className="desct-daire-disp">
                  <div className="yumrudaire"></div>
                  <p className="whatmakep">{item}</p>
                </div>
              ))}
            </div>
            <div className="descd-number-2">
              <p className="descpd-heading">DESCRIPTION</p>
              <p className="whatmakep">{product.description}</p>
            </div>
          </div>
        </div>

        <div className="product-right-information">
          <div className="for-media-margin">
            <p className="product-inform-pages">Home &gt; Men's Shoes &gt; </p>
            <div className="prodc-infm-disp">
              <span className="inform-spans1">{product.name}</span>
              <span className="inform-spans2">${product.price}.00</span>
            </div>
          </div>

          <div className="product-images fordisplayblock">
            <img className="prodasecndimg1" src={mevcutVaryasyon.image} alt={product.name} />
          </div>

          <div className="for-media-margin">
            <div className="inform-color-font">Color: {selectedColor}</div>
            <span className="clasics">Classics</span>

            <div className="color-options">
              {product.variations.map((varyasyon, index) => (
                <img
                  key={index}
                  className="color-circle-spani"
                  src={varyasyon.circleBack}
                  alt={varyasyon.color}
                  onClick={() => {
                    setMevcutVaryasyon(varyasyon);
                    setSelectedColor(varyasyon.color);
                  }}
                />
              ))}
            </div>

            <div className="find-your-size">
              <img src={sekl1} alt="sekil1" />
              <div>
                <p>Find Your Shoe Size </p>
                <p>With A Quick Scan.</p>
              </div>
              <img src={sekl2} alt="sekil2" />
            </div>

            <div>
              <div className="select-size">
                <div>
                  <span>SELECT Size:</span>
                  <span className="size-guides">This style runs 1/2 size large.</span>
                </div>
                <span className="size-guides2">Size Guide</span>
              </div>

              <div className="numbers-boxes">
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`number ${activeIndex === index ? "new-add-clas" : ""}`}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <button
                onClick={() => addToCart(product, mevcutVaryasyon)} 
                className={`product-button ${activeIndex !== null ? "new-add-clas" : ""}`}
              >
                add to cart
              </button>

              <p className="product-end-paragraf">or 4 interest-free installments of $37.25 by ⓘ</p>
              <p className="product-end-paragraf">Free Shipping on Orders $100+ and Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
