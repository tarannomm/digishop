import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ProductCard from "./Card";

const ProductSlider = ({ data }) => {
  return (
    <div className="w-full ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="swiper-container"
      >
        {data?.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <ProductCard info={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
