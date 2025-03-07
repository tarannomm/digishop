import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { productsReq } from "../services/requests";
import { filterType, ProductType } from "../types/AppTypes";
import Snippers from "../components/modules/snippers";
import ImageSlider from "../components/modules/Slider";
import ProductSlider from "../components/modules/ProductSlider ";
import img from "../assets/images/Electronics.webp";
import BrandSlider from "../components/modules/BrandSlider";

const Home: React.FC = () => {
  const [filter, setFilter] = useState<filterType>({});
  const { data, isLoading } = useQuery<ProductType[]>({
    queryKey: ["product", filter],
    queryFn: () => productsReq(filter),
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full ">
      <div className="w-full lg:w-[100%] my-5">
        <ImageSlider />
        {isLoading ? (
          <Snippers />
        ) : (
          <div className="flex flex-col md:flex-row items-center bg-[#ffff] rounded-lg my-10">
            <div className="w-[100%] md:w-[15%] flex flex-col items-center mt-5 md:mt-0">
              <p className="text-2xl font-semibold text-center mb-7">
                پیشــنهاد شـــگفـت انگـــیز
              </p>
              <img
                src={img}
                className="w-[150px] hidden md:block"
                alt="slider"
              />
            </div>
            <div className="w-[100%] md:w-[85%] p-[15px]">
              <ProductSlider data={data} />
            </div>
          </div>
        )}
        <div>
          <BrandSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
