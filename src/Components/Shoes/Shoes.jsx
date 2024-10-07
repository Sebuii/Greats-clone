import React, { useState, useRef } from "react";
import "./Shoes.css";
import shoesData from "../ShoesData/ShoesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Shoes() {
  const swiperRef = useRef(null); 
  const [swiper, setSwiper] = useState(null);

  const initialVariations = shoesData.map((ayakkabi) => ayakkabi.variations[0]);
  const [mevcutVaryasyon, setMevcutVaryasyon] = useState(initialVariations);

  const initialColors = shoesData.map((ayakkabi) => ayakkabi.variations[0].color);
  const [selectedColor, setSelectedColor] = useState(initialColors);

  const handleSwiper = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  return (
    <div className="slider-container">
      <div className="slider-btn">
        <div className="slider-header">
          <p>New Arrivals</p>
          <div className="spsss">
            <span>For Men</span>
            <span>For Women</span>
          </div>
        </div>
        <div className="btns">
          <div onClick={() => swiper && swiper.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <path d="M5 0L0 3L5 6V0Z" fill="black"></path>
            </svg>
          </div>
          <div className="rota" onClick={() => swiper && swiper.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
              <path d="M5 0L0 3L5 6V0Z" fill="black"></path>
            </svg>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={handleSwiper}
        spaceBetween={10} 
        slidesPerView={3} 
        breakpoints={{
          1366: { slidesPerView: 3.23, spaceBetween: 10 },
          1024: { slidesPerView: 3.23, spaceBetween: 10 },
          768: { slidesPerView: 3.3, spaceBetween: 10 },
          541: { slidesPerView: 2.3, spaceBetween: 10 },
          540: { slidesPerView: 2, spaceBetween: 0 },
          100: { slidesPerView: 1, spaceBetween: 5 },
        }}
        ref={swiperRef}
      >
        {shoesData.map((ayakkabi, ayakkabiIndex) => {
          const currentVariation = mevcutVaryasyon[ayakkabiIndex]; 

          return (
            <SwiperSlide key={ayakkabi.id}>
              <div className="div-kart" style={{ marginBottom: "50px" }}>
                <div
                  className="shoe-image"
                  style={{
                    backgroundImage: `url(${currentVariation.image})`, 
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${currentVariation.hoverImage})`)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${currentVariation.image})`)}
                ></div>
                <div className="kart-main">
                  <div className="spn-disp">
                    <span>{ayakkabi.name}</span>
                    <span>{ayakkabi.price}</span>
                  </div>
                  {ayakkabi.variations && (
                    <>
                      <div className="color-options">
                        {ayakkabi.variations.map((varyasyon, index) => (
                          <img
                            className="color-circle-spani"
                            key={index}
                            onClick={() => {
                              const newVariations = [...mevcutVaryasyon];
                              newVariations[ayakkabiIndex] = varyasyon; 
                              setMevcutVaryasyon(newVariations);

                              const newSelectedColor = [...selectedColor];
                              newSelectedColor[ayakkabiIndex] = varyasyon.color; 
                              setSelectedColor(newSelectedColor);
                            }}
                            src={varyasyon.circleBack}
                            alt="sekil"
                          />
                        ))}
                      </div>

                      <div className="quickadd">
                        <span>Quick Add</span>
                        <span>+</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Shoes;
