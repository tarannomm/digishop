import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button, Chip, Image, Tooltip } from "@heroui/react";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ProductType } from "../../types/AppTypes";
import AddShop from "./AddShop";

const ProductCard: React.FC<any> = ({ info }) => {
  const { title, price, image, category, _id } = info;
  const [favorite, setFavorite] = useState<boolean>(false);
  const navigate = useNavigate();
  const favoriteHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setFavorite(!favorite);
  };
  return (
    <div
      onClick={() => navigate(`/productDetails/${_id}`)}
      className="cursor-pointer m-2"
    >
      <Card>
        <CardHeader className="pb-0 px-2 flex-col items-start relative">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full z-0"
            src={`https://apidigishop.narinsoft.ir/${image}`}
          />
          <Tooltip
            content={
              favorite ? "حذف از علاقه مندی ها" : "افزودن به علاقه‌مندی‌ها"
            }
            placement="left"
            color="foreground"
          >
            <button
              className="absolute top-3 right-3 p-2  transition z-10"
              onClick={favoriteHandler}
            >
              {favorite ? (
                <FaHeart className="text-mid hover:text-red-600 text-lg" />
              ) : (
                <FaRegHeart className="text-light hover:text-red-600 text-lg" />
              )}
            </button>
          </Tooltip>
          <Chip className="absolute top-5 left-3 text-[10px]">
            {category?.title}
          </Chip>
        </CardHeader>
        <CardBody className="overflow-visible py-2 items-center">
          <p className="font-bold text-darken text-lg">{title}</p>
          <small className="text-orangedark font-bold mt-3">
            {price.toLocaleString()} ریال
          </small>
          <div className="mt-10 mb-2 w-full ">
            <AddShop product={info} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
