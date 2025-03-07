import {
  AddressFormValues,
  filterType,
  FormInputs,
  ProductType,
} from "../types/AppTypes";
import api from "./api";

const apiRequest = async (requestFunction: Function, params: any) => {
  try {
    const { data } = await requestFunction(params);
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error; 
  }
};

// Signup
export const createUser = async (formData: FormInputs) => {
  return await apiRequest((params) => api.post("/api/auth/localSignup", params), formData);
};

// Login
export const loginUser = async (formData: FormInputs) => {
  return await apiRequest((params) => api.post("/api/auth/localSignin", params), formData);
};

// Products list with filters
export const productsReq = async (filters: filterType) => {
  const validFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== "")
  );

  return await apiRequest((params) => api.get("/api/products", { params }), validFilters);
};

// Fetch single product by id
export const OneproductReq = async (id: string) => {
  return await apiRequest(() => api.get(`/api/products/${id}`), {});
};

// Categories of products
export const availableCategories = async () => {
  return await apiRequest(() => api.get("/api/categories"), {});
};

// Create order
export const createOrders = async (
  products: any[], 
  address: AddressFormValues,
  token: string
) => {
  const selectedProducts = products.map((item: any) => ({
    productId: item._id,
    selectedQuantity: item.count,
  }));

  return await apiRequest(
    (params) =>
      api.post(
        "/api/orders/create",
        {
          address,
          products: selectedProducts,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    {}
  );
};
