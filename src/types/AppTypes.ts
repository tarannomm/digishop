import { ReactNode } from "react";

//app layout
export interface LayoutProps{
    children:ReactNode

}
//login & dignup part
export interface FormInputs {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    username: string;
    password: string;
  }


  