import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@heroui/react";
import CartTable from "../components/modules/CartTable";
import LottieDesign from "../utility/lotties/LottieDesign";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useMutation } from "@tanstack/react-query";
import { createOrders } from "../services/requests";
import { toast } from "react-toastify";
import { ProductType } from "../types/AppTypes";

const ShopCart: React.FC = () => {
  const [cookies, setCookie] = useCookies(["AuthToken"]);
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.myArray.cartItem);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const total = cartItems.reduce((acc: number, item: any) => {
      return acc + item.count * item.price;
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);

const mutation = useMutation<void, Error>({
  mutationFn: async () => {
    if (!cookies.AuthToken) {
      navigate("/login");
      return; 
    }
    return await createOrders(cartItems, cookies.AuthToken);
  },

  onSuccess: () => {
    toast.success("سفارش با موفقیت ثبت شد!");
  },

  onError: (error) => {
    console.log(error);
    
    // toast.error(error.response?.data?.message || "مشکلی پیش آمد!");
  },
});


  const orderHandler = () => {
    mutation.mutate(cartItems);
  };
  return (
    <div className="box p-5 m-5 flex-col lg:flex-row">
      {cartItems.length > 0 ? (
        <>
          <CartTable />
          <div className="text-center">
            <div className="box flex-col border-2 w-full lg:w-fit mt-3 border-light">
              <h1 className="titleText">مجموع کل سبد خرید</h1>
              <div className="p-3 space-y-3">
                <div className="flex">
                  <p className="pText">قیمت کل نهایی:</p>
                  <span className="describText">
                    {totalPrice.toLocaleString()} ریال
                  </span>
                </div>
                <hr />
                <>
                  <p className="pText text-start mb-2">حمل و نقل :</p>
                  <span className="describText ">
                    ارسال با پست پیشتاز تحویل کالا 3-4 روز کاری بعد از ثبت سفارش
                    <i className="block text-orange-800 py-2 ">
                      {" "}
                      هزینه ارسال : 490,000 ریال
                    </i>
                  </span>
                </>
                <hr />
                <div className="flex">
                  <p className="pText">مجموع :</p>
                  <span className="text-green-700 font-bold p-[2px] lg:text-[18px]">
                    {(totalPrice + 490000).toLocaleString()} ریال
                  </span>
                </div>
                <Button className="btn !mt-10 !text-sm" onPress={orderHandler}>
                  اقدام به پرداخت
                </Button>
              </div>
            </div>
            <Link
              to="/shop"
              className="w-full  !text-orangeLight text-center  !text-[12px]   hover:font-bold "
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        </>
      ) : (
        <div className=" w-full">
          <LottieDesign
            text="سبد خرید شما خالی میباشد !"
            link="/"
            animation="shopcart"
            linkText="هدایت به فروشگاه"
          />
        </div>
      )}
    </div>
  );
};

export default ShopCart;
