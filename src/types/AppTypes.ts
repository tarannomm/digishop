import { Dispatch, ReactNode, SetStateAction } from "react";

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
//products types
export interface ProductType{
        title:string,
        price:number,
        quantity: 35,
        description:string,
        image: string,
        category?: {
            title:string,
        },
}
//drop down items and def value types
export interface SelectProps{
    defaultVal:string,
     label:string,
     state: Set<string>;
     setState: Dispatch<SetStateAction<Set<string>>>;
    items:{
        title:string,
        key:string,
       
    }[]
}


  