import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Image,
} from "@heroui/react";
import React from "react";
import { useSelector } from "react-redux";
import AddShop from "./AddShop";

const CartTable: React.FC = () => {
  const columns = [
    { key: "row", label: "ردیف" },
    { key: "image", label: " تصویر محصول" },
    { key: "title", label: "نام محصول" },
    { key: "price", label: "قیمت واحد" },
    { key: "count", label: "تعداد" },
    { key: "All", label: " قیمت کل " },
  ];

  const cartItems = useSelector((state: any) => state.myArray.cartItem);

  return (
    <Table className="w-full mx-4 ">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={[...cartItems.entries()]}>
        {([index, item]: [number, any]) => (
          <TableRow key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <Image
                alt="device"
                className=" w-[50px] h-[50px]   sm:w-[80px] sm:h-[80px] rounded-3xl"
                src={`https://apidigishop.narinsoft.ir/${item.image}`}
              />
            </TableCell>
            <TableCell className="span">{item.title}</TableCell>
            <TableCell className="span">
              {item.price.toLocaleString()} ریال
            </TableCell>
            <TableCell>
              <AddShop product={item} />
            </TableCell>
            <TableCell className="span">
              {(item.price * item.count).toLocaleString()} ریال
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CartTable;
