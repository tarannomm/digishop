import React from "react";
import Lottie from "react-lottie";
import empty from "./emptyshop1.json";
import search from "./emptyshop2.json";
import notfound from "./notFound.json";
import { LottieProps } from "../../types/AppTypes";

const LottieWrapper: React.FC<LottieProps> = ({ animationType }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData:
      animationType == "search"
        ? search
        : animationType == "notfound"
        ? notfound
        : empty,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={options} />;
};

export default LottieWrapper;
