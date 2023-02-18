import { configureStore } from '@reduxjs/toolkit';
import todos from '../module/todosSlice';

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
