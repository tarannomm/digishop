import ShopBadge from "./shopBadge";
import { AiFillHome } from "react-icons/ai";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      name: "خانه",
      key: "/",
      icon: <AiFillHome size={18} className="icon ml-2" />,
    },
    {
      name: "فروشگاه",
      key: "/shop",
      icon: <FaBagShopping size={18} className="icon ml-2" />,
    },
    {
      name: "درباره ما",
      key: "/aboutus",
      icon: <BsInfoCircleFill size={18} className="icon ml-2" />,
    },
  ];

  return (
    <Navbar className="box !justify-between" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="/logo.png"
            className="rounded-full w-14  hidden lg:inline"
          />
          <h1 className="text-dark font-bold lg:text-xl px-5"> دیجی شاپ </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="shop">
            فروشگاه
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/">
            صفحه اصلی
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            درباره ما
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            className=" mx-5 flex items-center text-orangedark "
            href="/login"
          >
            <CgProfile className="text-[36px] m-1" />
            <span className="hidden lg:inline">ورود/ ثبت نام</span>
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
              href={item.key}
              size="lg"
            >
              {item.icon} {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
