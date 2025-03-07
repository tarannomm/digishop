import React from "react";

import { useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@heroui/react";

export default function OrderConfirmation() {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const orderItems = useSelector((state: any) => state.myArray.orderItem);
  return (
    <div className="mt-5 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white rounded-t-lg flex flex-col items-center justify-center pt-10 pb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-center">
            سفارش شما با موفقیت ثبت شد
          </h1>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
            <div>
              <p className="text-sm text-gray-500">شماره سفارش</p>
              <p className="font-medium">{orderItems[0]?._id}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-sm text-gray-500">تاریخ</p>
              <p className="font-medium">
                {orderItems[0]?.createdAt.slice(0, 10)}
              </p>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">آدرس تحویل</h3>
            <div className="text-sm text-gray-700">
              <p>استان: {orderItems[0]?.address?.province}</p>
              <p>شهر: {orderItems[0]?.address?.city}</p>
              <p>کد پستی: {orderItems[0]?.address?.postalCode}</p>
              <p>جزئیات: {orderItems[0]?.address?.detail}</p>
            </div>
          </div>

          <div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-between w-full"
            >
              <span className="font-medium">جزئیات سفارش</span>
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  showDetails ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDetails && (
              <div className="mt-4 space-y-4">
                {orderItems[0]?.products.map((item) => (
                  <div key={item?._id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item?.title}</p>
                      <p className="text-sm text-gray-500">
                        تعداد: {item?.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      {item?.price.toLocaleString()} ریال
                    </p>
                  </div>
                ))}

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between mt-2 font-bold">
                    <p>مجموع</p>
                    <p> {orderItems[0]?.totalAmount.toLocaleString()} ریال</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 p-6 pt-0">
          <Button
            color="success"
            className="text-white"
            onPress={() => {
              navigate("/shop", { replace: true });
            }}
          >
            <ShoppingBagIcon className="ml-2 h-4 w-4" />
            فروشگاه
          </Button>
        </div>
      </div>
    </div>
  );
}
