import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import img1 from "../../assets/images/1.webp";
import img2 from "../../assets/images/2.webp";
import img3 from "../../assets/images/3.webp";
import img4 from "../../assets/images/4.webp";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full"
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Link to="/shop">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-lg  h-[130px] md:h-[400px] md:rounded-2xl object-cover z-0"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
