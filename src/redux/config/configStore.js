import { configureStore } from '@reduxjs/toolkit';
import getDiary from '../module/diarySlice';

const store = configureStore({
  reducer: {
    getDiary,
  },
});

export default store;
