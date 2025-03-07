import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import { LayoutProps } from "../../types/AppTypes";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
