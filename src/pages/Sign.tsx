import React, { useEffect, useState } from "react";
import { Button, Input } from "@heroui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FormInputs } from "../types/AppTypes";
import { createUser, loginUser } from "../services/requests";
import { useCookies } from "react-cookie";

const Sign: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [cookies, setCookie] = useCookies(["AuthToken", "Username"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormInputs>();

  const mutation = useMutation({
    mutationFn: (data: FormInputs) =>
      pathname === "/signup" ? createUser(data) : loginUser(data),
    onSuccess: (data) => {
      pathname === "/signup"
        ? (toast.success("حساب کاربری شما با موفقیت ایجاد شد!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }),
          reset(),
          navigate("/login"))
        : (toast.success("به دیجی شاپ خوش آمدید", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }),
          setCookie("AuthToken", data.access_token, {
            expires: new Date(Date.now() + 5 * 60 * 60 * 1000),
          }),
          setCookie("Username", watch("username"), {
            expires: new Date(Date.now() + 5 * 60 * 60 * 1000),
          }),
          reset(),
          navigate("/"));
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "مشکلی پیش آمد!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const formSubmitHandler: SubmitHandler<FormInputs> = (data) => {
    mutation.mutate(data);
  };

  const LoginInputs: {
    id: number;
    title: string;
    name: string;
    type: string;
  }[] = [
    { id: 1, title: "نام کاربری", name: "username", type: "text" },
    { id: 2, title: "رمز عبور", name: "password", type: "password" },
  ];

  const SignupInputs: {
    id: number;
    title: string;
    name: string;
    type: string;
  }[] = [
    { id: 1, title: "نام", name: "firstName", type: "text" },
    { id: 2, title: "نام خانوادگی", name: "lastName", type: "text" },
    { id: 3, title: "شماره موبایل", name: "phoneNumber", type: "number" },
    { id: 4, title: "نام کاربری", name: "username", type: "text" },
    { id: 5, title: "رمز عبور", name: "password", type: "password" },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col mt-14 items-center justify-center">
      <div className="formContainer w-[32%] min-w-[300px]">
        <h1 className="text-lg lg:text-2xl font-bold text-darken my-4 text-center">
          {pathname === "/signup" ? "ایجاد حساب کاربری" : "ورود"}
        </h1>
        <form className="w-full" onSubmit={handleSubmit(formSubmitHandler)}>
          {pathname === "/signup"
            ? SignupInputs.map((field) => (
                <div key={field.id} className="flex flex-col my-3">
                  <Input
                    label={field.title}
                    labelPlacement="outside"
                    variant="bordered"
                    type={
                      field.name === "password"
                        ? showPass
                          ? "text"
                          : "password"
                        : field.type
                    }
                    className="rounded-md"
                    autoComplete="off"
                    {...register(field.name as keyof FormInputs, {
                      required: `${field.title} الزامی است`,
                      minLength:
                        field.name === "password"
                          ? {
                              value: 6,
                              message: "رمز عبور حداقل ۶ کاراکتر باشد",
                            }
                          : undefined,
                      pattern:
                        field.name === "phoneNumber"
                          ? {
                              value: /^[0-9]{11}$/,
                              message: "شماره موبایل نامعتبر است",
                            }
                          : undefined,
                    })}
                    endContent={
                      field.type === "password" ? (
                        <span
                          onClick={() => setShowPass(!showPass)}
                          className="cursor-pointer"
                        >
                          {showPass ? (
                            <FaRegEyeSlash className="icon" />
                          ) : (
                            <IoEyeOutline className="icon" />
                          )}
                        </span>
                      ) : null
                    }
                  />
                  {errors[field.name as keyof FormInputs] && (
                    <span className="errorSpan">
                      {errors[field.name as keyof FormInputs]?.message}
                    </span>
                  )}
                </div>
              ))
            : LoginInputs.map((field) => (
                <div key={field.id} className="flex flex-col my-3">
                  <Input
                    label={field.title}
                    labelPlacement="outside"
                    variant="bordered"
                    type={
                      field.name === "password"
                        ? showPass
                          ? "text"
                          : "password"
                        : field.type
                    }
                    className="rounded-md"
                    autoComplete="off"
                    {...register(field.name as keyof FormInputs, {
                      required: `${field.title} الزامی است`,
                      minLength:
                        field.name === "password"
                          ? {
                              value: 6,
                              message: "رمز عبور حداقل ۶ کاراکتر باشد",
                            }
                          : undefined,
                    })}
                    endContent={
                      field.type === "password" ? (
                        <span
                          onClick={() => setShowPass(!showPass)}
                          className="cursor-pointer"
                        >
                          {showPass ? (
                            <FaRegEyeSlash className="icon" />
                          ) : (
                            <IoEyeOutline className="icon" />
                          )}
                        </span>
                      ) : null
                    }
                  />
                  {errors[field.name as keyof FormInputs] && (
                    <span className="errorSpan">
                      {errors[field.name as keyof FormInputs]?.message}
                    </span>
                  )}
                </div>
              ))}

          <Button
            variant="flat"
            className="btn mt-12 mb-4 w-full"
            type="submit"
            isLoading={mutation.isPending}
          >
            {pathname === "/signup" ? "عضویت" : "ورود"}
          </Button>

          <div className="m-auto w-fit">
            {pathname === "/signup" ? (
              <>
                <span className="span">قبلا حساب کاربری ایجاد کرده اید؟</span>
                <Link to="/login" className="links">
                  ورود
                </Link>
              </>
            ) : (
              <>
                <span className="span">حساب کاربری فعالی ندارید؟</span>
                <Link to="/signup" className="links">
                  ایجاد حساب کاربری
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
