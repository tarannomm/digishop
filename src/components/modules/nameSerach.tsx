import { Button, Input } from "@heroui/react";
import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { filterprops } from "../../types/AppTypes";
import { useForm } from "react-hook-form";

const NameSerach: React.FC<filterprops> = ({ state, setState }) => {
  const form = useForm();
  const { register, handleSubmit, reset } = form;
  const searchHandler = (data) => {
    setState({ ...state, query: data.searchname });
  };

  return (
    <div className="box m-2 !p-3 !items-start   flex-col w-full">
      <span className="span mb-3">جستجو بر اساس نام محصول :</span>
      <Input
        type="text"
        placeholder="نام محصول"
        className="nameSearch"
        {...register("searchname")}
        endContent={
          <IoSearch
            onClick={handleSubmit(searchHandler)}
            className="text-2xl text-orangeLight transition cursor-pointer "
          />
        }
      />
    </div>
  );
};
export default NameSerach;
