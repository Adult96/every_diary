import { configureStore } from '@reduxjs/toolkit';
import diraySlice from '../module/diraySlice';

const store = configureStore({
  reducer: {
    diraySlice,
  },
});

export default store;
