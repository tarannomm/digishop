import React from "react";
import LottieWrapper from "./lottieWrapper";
import { Link, useNavigate } from "react-router-dom";
import { lottieDesignProps } from "../../types/AppTypes";
import { Button } from "@heroui/react";

const LottieDesign: React.FC<lottieDesignProps> = ({
  text,
  link,
  animation,
  linkText,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[40%] min-w-[300px] h-[520px] flex flex-col items-center m-auto my-20">
        <h1 className="text-dark font-bold lg:text-lg mb-5">{text}</h1>
        <LottieWrapper animationType={animation} />
        <Button color="primary" variant="flat" onPress={() => navigate(link)}>
          {linkText}
        </Button>
      </div>
    </div>
  );
};

export default LottieDesign;
