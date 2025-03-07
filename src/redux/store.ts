import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface product {
  _id: number;
  title: string;
  price: number;
  count?: number;
}

export interface State {
  cartItem: product[];
  orderItem: product[];
}

const initialState: State = {
  cartItem: [],
  orderItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<product>) {
      state.cartItem.push(action.payload);
    },
    addToOrder(state, action: PayloadAction<product>) {
      state.orderItem = [action.payload]; 
    }
    ,
    removeItem(state, action: PayloadAction<product>) {
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload._id
      );
    },
    updateItem(state, action: PayloadAction<{ id: number; count: number }>) {
      const { id, count } = action.payload;
      const item = state.cartItem.find((item) => item._id === id);
      if (item) {
        item.count = count;
      }
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

const { actions, reducer } = cartSlice;
const { addToCart, clearCart, removeItem, updateItem, addToOrder } = actions;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    myArray: persistedReducer,
  },
});

const persistor = persistStore(store);

export {
  store,
  persistor,
  addToCart,
  clearCart,
  removeItem,
  updateItem,
  addToOrder,
};
