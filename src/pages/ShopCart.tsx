import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@heroui/react";
import CartTable from "../components/modules/CartTable";
import LottieDesign from "../utility/lotties/LottieDesign";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useMutation } from "@tanstack/react-query";
import { createOrders } from "../services/requests";
import { toast } from "react-toastify";
import { addToOrder, clearCart } from "../redux/store";
import AddressModal from "../components/modules/AddressModal";
import { AddressFormValues } from "../types/AppTypes";

const ShopCart: React.FC = () => {
  const [cookies, setCookie] = useCookies(["AuthToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.myArray.cartItem);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [address, setAddress] = useState<AddressFormValues>({});

  useEffect(() => {
    const total = cartItems.reduce((acc: number, item: any) => {
      return acc + item.count * item.price;
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);

  const mutation = useMutation<any, Error>({
    mutationFn: async () => {
      if (!cookies.AuthToken) {
        navigate("/login");
        return;
      }
      return await createOrders(cartItems, address, cookies.AuthToken);
    },

    onSuccess: (response) => {
      if (!response) return;
      setModal(false);

      toast.success("سفارش با موفقیت ثبت شد!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch(clearCart());
      dispatch(addToOrder(response));
      navigate("/order-confirmation");
    },

    onError: (error) => {
      console.log(error);
      toast.error("مشکلی پیش آمد!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const handleAddressSubmit = (data) => {
    setAddress(data);
    mutation.mutate();
  };

  const orderHandler = () => {
    if (cookies.AuthToken) {
      setModal(true);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
                <p className="pText text-start mb-2">حمل و نقل :</p>
                <span className="describText ">
                  ارسال با پست پیشتاز تحویل کالا 3-4 روز کاری بعد از ثبت سفارش
                  <i className="block text-orange-800 py-2 ">
                    هزینه ارسال : 490,000 ریال
                  </i>
                </span>
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
            {/* <Link
              to="/shop"
              className="w-full  !text-orangeLight text-center  !text-[12px]   hover:font-bold "
            >
              بازگشت به فروشگاه
            </Link> */}
          </div>
        </>
      ) : (
        <div className=" w-full">
          <LottieDesign
            text="سبد خرید شما خالی میباشد !"
            link="/shop"
            animation="shopcart"
            linkText="رفتن به فروشگاه"
          />
        </div>
      )}

      <AddressModal
        isOpen={modal}
        onOpenChange={setModal}
        onSubmit={handleAddressSubmit}
        isPending={mutation.isPending}
      />
    </div>
  );
};

export default ShopCart;
