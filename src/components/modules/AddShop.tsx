import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeItem,
  updateItem,
} from "../../redux/store";
import { CgTrash } from "react-icons/cg";

const AddShop: React.FC<any> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.myArray.cartItem);

  const existingItem = cartItems.find((item: any) => item._id === product._id);
  const [count, setCount] = useState<number>(
    existingItem ? existingItem.count : 1
  );
  const AddToCartHandler = () => {
    setCount(1);
    const updatedProduct = { ...product, count };
    dispatch(addToCart(updatedProduct));
    // dispatch(clearCart())
  };

  const isInCart: boolean = cartItems?.some(
    (item: any) => item?._id == product?._id
  );

  useEffect(() => {
    if (count > 0) {
      dispatch(updateItem({ id: product?._id, count }));
    }
  }, [count]);

  return (
    <div className="w-full flex justify-center">
      {isInCart ? (
        <div className="flex justify-between items-end max-w-[300px]  mb-[6px]">
          <Button
            isDisabled={count >= product.quantity}
            size="sm"
            className="smallbtn"
            onPress={() => setCount(count + 1)}
          >
            +
          </Button>
          <span className="text-xl mx-4 text-orangeLight font-bold ">
            {count}
          </span>
          {count === 1 ? (
            <Button
              size="sm"
              className="smallbtn"
              onPress={() => {
                setCount(0);
                dispatch(removeItem(product));
              }}
            >
              <CgTrash size={20} />
            </Button>
          ) : (
            <Button
              isDisabled={count <= 1}
              size="sm"
              className="smallbtn"
              onPress={() => setCount(count - 1)}
            >
              -
            </Button>
          )}
        </div>
      ) : (
        <Button
          className="btn !text-tiny group relative"
          onPress={AddToCartHandler}
        >
          <span className="group-hover:hidden">افزودن به سبد خرید</span>
          <FaShoppingCart className="icons hidden group-hover:block text-lg" />
        </Button>
      )}
    </div>
  );
};

export default AddShop;
