import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../components/shared/reducers/navbar';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});