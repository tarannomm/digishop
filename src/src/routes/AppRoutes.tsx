import React from "react";
import { Route, Routes } from "react-router-dom";
import Sign from "../pages/Sign";
import ProductsList from "../pages/productsList";
import ProductDetails from "../pages/productDetails";
import NotFound from "../pages/NotFound";
import ShopCart from "../pages/ShopCart";
import Home from "../pages/Home";
import OrderConfirmation from "../pages/order-confirmation";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Sign />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/shop" element={<ProductsList />} />
      <Route path="/shopcart" element={<ShopCart />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
