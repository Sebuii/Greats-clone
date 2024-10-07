import React from "react";
import "./ForImage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import forimg1 from "../../Assets/Images/forimg1.webp";
import forimg2 from "../../Assets/Images/forimg2.webp";
import forimg3 from "../../Assets/Images/forimg3.webp";
import forimg4 from "../../Assets/Images/forimg4.webp";
const medya = [
  {
    imgurl: forimg1,
    desc: "Shop Low Tops",
  },
  {
    imgurl: forimg2,
    desc: "Shop Loafers",
  },
  { imgurl: forimg3, desc: "Shop Shoe Care & Laces" },
  { imgurl: forimg4, desc: "Shop Royale 2.0" },
];

function ForImage() {
  return (
    <div className="for-container">
      <div className="slider-header">
        <p>Featured Collections</p>
        <div className="spsss">
          <span>For Men</span>
          <span>For Women</span>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        grabCursor={true}
        loop={true} 
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },

          540: {
            slidesPerView: 2.35,
          },
          400: {
            slidesPerView: 1.25,
          },
          100: {
            slidesPerView: 1.45,
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
export default ForImage;
