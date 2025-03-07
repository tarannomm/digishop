import { Dispatch, ReactNode, SetStateAction } from "react";

//app layout
export interface LayoutProps {
  children: ReactNode;
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
export interface ProductType {
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category?: {
    title: string;
  };
  count?: number | undefined;
}
//drop down items and def value types
export interface SelectProps {
  state: Set<string>;
  setState: Dispatch<SetStateAction<Set<string>>>;
  items: {
    title: string;
    key: string;
  }[];
}

//types of filter fields in product list
export interface filterType {
  query?: string;
  category?: string;
  sort?: string;
}

//types of filter state and setter
export interface filterprops {
  state: filterType;
  setState: Dispatch<SetStateAction<filterType>>;
}

//lottie wrapper component props
export interface LottieProps {
  animationType: string;
  height?: number;
  width?: number;
}
export interface lottieDesignProps {
  animation: string;
  text: string;
  linkText: string;
  link: string;
}
//types of address modal
export interface AddressModalProps {
  isOpen: boolean;
  isPending: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: AddressFormValues) => void;
}

export interface AddressFormValues {
  province?: string;
  city?: string;
  postalCode?: string;
  detail?: string;
}
