import { configureStore } from '@reduxjs/toolkit';
import diary from '../module/diarySlice';

const store = configureStore({
  reducer: {
    diary,
  },
});

export default store;
