import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import img1 from "../../assets/images/b1.jpg";
import img2 from "../../assets/images/b2.png";
import img3 from "../../assets/images/b3.png";
import img4 from "../../assets/images/b4.png";
import img5 from "../../assets/images/b5.png";
import img6 from "../../assets/images/b6.png";
import img7 from "../../assets/images/b7.jpg";
import img8 from "../../assets/images/b8.jpg";
import img9 from "../../assets/images/b9.png";
import img10 from "../../assets/images/10.jpg";

const BrandSlider = () => {
  return (
    <div className="w-full mx-auto p-4 py-6 bg-[#ffff] rounded-lg my-6">
      <h2 className="text-2xl font-semibold text-center mb-7">
        محبوب‌ترین برندها
      </h2>
      <Swiper
        slidesPerView={3}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
        spaceBetween={20}
        className="swiper-container"
      >
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
          (img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-[100px] object-contain"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
