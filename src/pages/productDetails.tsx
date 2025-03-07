import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { OneproductReq } from "../services/requests";
import { Link, useParams } from "react-router-dom";
import { Image } from "@heroui/react";
import Snippers from "../components/modules/snippers";
import { FaMoneyBillWave, FaTruck } from "react-icons/fa";
import AddShop from "../components/modules/AddShop";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["details", id],
    queryFn: () => (id ? OneproductReq(id) : Promise.reject("No ID provided")),
    enabled: !!id,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Snippers />
      ) : (
        <div className="w-full max-w-[900px] flex flex-col items-center  m-auto">
          <div className="box p-4 mt-4 flex-col !items-start w-full">
            <div className="flex flex-col sm:flex-row w-full !justify-start ">
              <Image
                alt="Card background"
                className=" rounded-xl w-full sm:w-[300px] lg:w-[400px]"
                src={`https://apidigishop.narinsoft.ir/${data.image}`}
              />
              <div className="w-full sm:w-[60%] sm:mx-3">
                <h1 className="text-orangeLight font-bold m-2 lg:text-xl">
                  {data.title}
                </h1>
                <div className="border-2 border-dashed border-light rounded-lg md:m-2 p-2 ">
                  <div className="bg-gray-100 rounded-lg w-fit m-2 p-[5px] text-mid">
                    دسته بندی :
                    <span className="font-bold text-darken m-2">
                      {data.category.title}
                    </span>
                  </div>
                  <div className="flex  items-center pl-10 my-[13px]">
                    <span className="span flex items-center text-sm lg:text-lg">
                      <FaMoneyBillWave size={24} className="m-2" />
                      قیمت :
                    </span>
                    <span className="text-green-700 font-bold  text-sm lg:text-lg">
                      {data.price.toLocaleString()} ریال
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between mt-12 lg:mt-[90px] mb-2 ">
                    <div className="w-[200px]">
                      <AddShop product={data} />
                    </div>
                    <Link
                      to="/shop"
                      className="w-[200px] h-[20px] !text-orangeLight text-center md:text-end !text-[12px] pb-6  hover:font-bold mx-3 mt-3"
                    >
                      بازگشت به فروشگاه
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <p className="flex items-center text-orangedark text-sm lg:text-[14px] mt-2 ">
              <FaTruck size={20} className="mx-2" />
              ارسال 3-4 روز کاری بعد از ثبت سفارش{" "}
            </p>
          </div>
          <div className="box flex-col p-5 !items-start my-3">
            <h1 className="text-orangedark font-bold">توضیحات محصول :</h1>
            <p className="text-justify text-base/7 text-[15px] mt-4">
              {data.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
