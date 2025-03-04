import { filterType, FormInputs } from "../types/AppTypes";
import api from "./api";

//signup
export const createUser = async (formData:FormInputs) => {
    const { data } = await api.post("/api/auth/localSignup",formData);
    return data;
  };
//login
export const loginUser = async (formData:FormInputs) => {
    const { data } = await api.post("/api/auth/localSignin", formData);
    return data;
  };
//products list 
export const productsReq=async(filters:filterType)=>{
    const validFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== "")
    );
    const {data}=await api.get("/api/products",
        {
        params:validFilters
      
        });
    return data
}

//fetching one-product with its id
export const OneproductReq=async(id:string)=>{
 
    const {data}=await api.get(`/api/products/${id}`);
    return data
}

//categories of product
export const availableCategories=async()=>{
    const {data}=await api.get("/api/categories");
    return data
}