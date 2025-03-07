import React, { useEffect, useState } from "react";
import SortBox from "../components/modules/sortBox";
import ProductCard from "../components/modules/Card";
import { useQuery } from "@tanstack/react-query";
import { productsReq } from "../services/requests";
import { filterType, ProductType } from "../types/AppTypes";
import { Button, Spinner } from "@heroui/react";
import CategorySearch from "../components/modules/categorySearch";
import NameSerach from "../components/modules/nameSerach";
import LottieWrapper from "../utility/lotties/lottieWrapper";
import Snippers from "../components/modules/snippers";

const ProductsList: React.FC = () => {
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
    <div className="w-full flex flex-col lg:flex-row justify-between">
      <div className="lg:w-[23%] flex lg:flex-col my-2">
        <NameSerach state={filter} setState={setFilter} />
        <CategorySearch state={filter} setState={setFilter} />
      </div>
      <div className="w-full lg:w-[75%]">
        <SortBox state={filter} setState={setFilter} />
        {isLoading ? (
          <Snippers />
        ) : data?.length ? (
          <div className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
            {data.map((product, index) => (
              <ProductCard key={index} info={product} />
            ))}{" "}
          </div>
        ) : (
          <div className=" flex flex-col items-center w-[50%] min-w-[250px] max-w-[400px] !mx-auto !my-12">
            <p className="links mb-8">محصولی با این مشخصات یافت نشد !</p>
            <LottieWrapper animationType="search" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
