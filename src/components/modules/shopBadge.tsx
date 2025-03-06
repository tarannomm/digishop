import { Badge, Chip } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopBadge: React.FC = () => {
  const cartItems = useSelector((state: any) => state.myArray.cartItem);
  const [total, setTotal] = useState<{ price: number; count: number }>({
    price: 0,
    count: 0,
  });
  useEffect(() => {
    const price = cartItems.reduce((acc: number, item: any) => {
      return acc + item.count * item.price;
    }, 0);
    const count = cartItems.reduce((acc: number, item: any) => {
      return acc + item.count;
    }, 0);

    setTotal({ count, price });
  }, [cartItems]);

  return (
    <Link to="/shopcart">
      <Badge
        className="bg-white border-1 border-light"
        placement="top-left"
        content={total.count || 0}
      >
        <div className="bg-orangedark p-[3px] rounded-full flex items-center">
          <div className="bg-white rounded-full p-[6px]">
            <LuShoppingCart size={14} />
          </div>
          <span className="px-1 text-lighten hidden lg:inline text-sm">
            {total.price.toLocaleString()} ریال
          </span>
        </div>
      </Badge>
    </Link>
  );
};

export default ShopBadge;
