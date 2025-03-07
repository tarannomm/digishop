import React, { useEffect } from "react";
import LottieDesign from "../utility/lotties/LottieDesign";

const NotFound: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <LottieDesign
      text="صفحه مورد نظر شما یافت نشد"
      link="/"
      animation="notfound"
      linkText="انتقال به صفحه اصلی"
    />
  );
};

export default NotFound;
