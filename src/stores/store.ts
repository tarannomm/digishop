import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'; 

interface product {
  id: number;
  title:string;
  price:number
}
 

export interface State {
  cartItem:product[]

}

const initialState: State = {
  cartItem:[]
};

 
const todoSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action: PayloadAction<product>) {
        state.cartItem.push(action.payload);
      }
    },
  });

const { actions, reducer } = todoSlice;
const {addToCart} = actions;

const persistConfig = {
  key: 'root',
  storage,
};

 
const persistedReducer = persistReducer(persistConfig, reducer);

 
const store = configureStore({
  reducer: {
    myArray: persistedReducer,
  },
});

 
const persistor = persistStore(store);

export { store, persistor,addToCart}; 
