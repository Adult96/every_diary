import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  diary: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __addDiary = createAsyncThunk(
  'ADD_NUMBER_WAIT',
  async (payload, thunkAPI) => {
    console.log(payload);

    await axios.post(`http://localhost:4000/diary`, payload);
  }
);

export const __getDiary = createAsyncThunk(
  'GET_DIARYS',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4000/diary');
      console.log(true, response.data);
      return thunkAPI.fulfillWithValue(response.data); //dispatch와 같은기능 성공했을 때 전달하는 dispatch __getTodos.API 메서드 들로 전달한다
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error); //dispatch와 같은기능 실패했을 때 전달하는 dispatch
    }
  }
);

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      console.log(action);
      state.diary = state.number + action.payload;
    },
  },
  extraReducers: bulider => {
    bulider.addCase(__getDiary.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getDiary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.diary = action.payload;
    });
    bulider.addCase(__getDiary.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const {} = diarySlice.actions;
export default diarySlice.reducer;
