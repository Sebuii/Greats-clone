import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./MenPageForImage.css"
import forimg1 from "../../Assets/Images/menimg1.png";
import forimg2 from "../../Assets/Images/menimg2.png";
import forimg3 from "../../Assets/Images/menimg3.png";
import forimg4 from "../../Assets/Images/menimg4.png";

const medya = [
  {
    imgurl: forimg1,
    desc: "Lifestyle",
  },
  {
    imgurl: forimg2,
    desc: "Runners",
  },
  { imgurl: forimg3, desc: "High Tops" },
  { imgurl: forimg4, desc: "Loafers" },
];

function MenPageForImage() {
  return (
    <div className="for-container menpagefor">
      <div className="slider-header">
        <p className="darkpar">All Men's</p>
        <p>Shop By Style</p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        grabCursor={true}
        loop={true} 
        breakpoints={{
          990: {
            slidesPerView: 4,
          },
        
          200: {
            slidesPerView: 1.2,
          },
        }}
      >
        {medya.map((item, index) => (
          <SwiperSlide key={index} className="forbox">
            <div style={{ backgroundImage: `url(${item.imgurl})` }} className="forimg"></div>
            <div className="foryazi">{item.desc}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default MenPageForImage;
