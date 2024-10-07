import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const sliderImages = Array.from({ length: 13 }, (_, i) =>
  require(`../../Assets/Images/slider${i + 1}.jpg`)
);

export default () => {
  return (
    <div className="slider-main">
      <p>WE LOVE A GAME OF TAG.</p>
      <div className="sldr-yaz">
        <span>@greats</span>
        <span>#BEGREAT</span>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={70}
        slidesPerView={5.3}
        loop={true}
        centeredSlides={true}
        navigation
        breakpoints={{
          100: {
            slidesPerView: 5,
            spaceBetween: 21,
          },
          400: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          500: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
          600: {
            slidesPerView: 5,
            spaceBetween: 41,
          },
          800: {
            slidesPerView: 5,
            spaceBetween: 51,
          },
          1000: {
            slidesPerView: 5.4,
            spaceBetween: 60,
          },
          1260: {
            slidesPerView: 5.3,
            spaceBetween: 69,
          },
          1400: {
            slidesPerView: 5.3,
            spaceBetween: 73,
          },
        }}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
{/* 
      <div className="swiper-button-prev"></div> 
      <div className="swiper-button-next"></div>  */}

    </div>
  );
};
