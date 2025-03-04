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
//categories of product
export const availableCategories=async()=>{
    const {data}=await api.get("/api/categories");
    return data
}