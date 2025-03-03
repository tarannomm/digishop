import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button, Image, Tooltip } from "@heroui/react";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/AppTypes";

const ProductCard: React.FC<any> = ({info}) => {
    const {title,price,image}=info;
  return (
    <Link to="/login" className="m-3"> 
    <Card>
      <CardHeader className="pb-0 px-2 flex-col items-start relative">  
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full z-0"
          src={"https://heroui.com/images/hero-card-complete.jpeg"}
        />
        <Tooltip content="افزودن به علاقه‌مندی‌ها" placement="left" color="foreground">
          <button className="absolute top-3 right-3 p-2  transition z-10">
            <FaRegHeart className="text-white hover:text-red-600 text-lg" />
          </button>
        </Tooltip>

      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <p className="font-bold text-darken text-lg">{title}</p>
        <small className="text-orangedark font-bold mt-3">{price.toLocaleString()} تومان</small>
        <Button className="btn !text-tiny">افزودن به سبد خرید</Button>
      </CardBody>
    </Card>
    </Link>
   
  );
};

export default ProductCard;
