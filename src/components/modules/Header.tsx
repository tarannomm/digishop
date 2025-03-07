import ShopBadge from "./shopBadge";
import { AiFillHome } from "react-icons/ai";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const [cookies] = useCookies(["Username"]);

  const menuItems = [
    {
      name: "خانه",
      path: "/",
      icon: <AiFillHome size={18} className="icon ml-2" />,
    },
    {
      name: "فروشگاه",
      path: "/shop",
      icon: <FaBagShopping size={18} className="icon ml-2" />,
    },
    {
      name: "درباره ما",
      path: "/aboutus",
      icon: <BsInfoCircleFill size={18} className="icon ml-2" />,
    },
  ];

  return (
    <Navbar
      classNames={{
        wrapper: "max-w-none w-full",
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="rounded-full w-14 hidden lg:inline" />
          <h1 className="text-dark font-bold lg:text-xl px-5"> دیجی شاپ </h1>
        </Link>
        <div className="hidden sm:flex gap-4 justify-center">
          {menuItems.map((item) => (
            <NavbarItem
              key={item.path}
              isActive={location.pathname === item.path}
            >
              <Link color="foreground" to={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            className=" mx-5 flex items-center text-orangedark "
            to="/login"
          >
            <CgProfile className="text-[36px] m-1" />
            <span className="hidden lg:inline">
              {cookies.Username ? cookies.Username : "ورود / ثبت‌نام"}
            </span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ShopBadge />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="box !w-[50%] !max-w-[400px] !justify-start !items-start !h-fit !m-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="m-4 " key={`${item}-${index}`}>
            <Link
              className="w-full links !text-dark "
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to={item.path}
            >
              {item.icon} {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
