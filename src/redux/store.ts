import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'; 

interface product {
  id: number;
  title:string;
  price:number
}
 

interface State {
  shopItem:product[]

}

const initialState: State = {
  shopItem:[]
};

 
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addToShop(state, action: PayloadAction<product>) {
        state.shopItem.push(action.payload);
      }
    },
  });

const { actions, reducer } = todoSlice;
const {addToShop} = actions;

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

export { store, persistor,addToShop}; 
