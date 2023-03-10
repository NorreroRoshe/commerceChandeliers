import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';
import filter from './filter/slice';
import product from './product/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
reducer: {
  filter,
  cart,
  product
},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();     //Создаем свой диспатч чтобы убрать ошибки с GoodsCatatlogue fetchProduct