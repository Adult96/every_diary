import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  diary: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getDiray = createAsyncThunk(
  'GET_DIARYS',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4000/diray');
      console.log(true, response.data);
      return thunkAPI.fulfillWithValue(response.data); //dispatch와 같은기능 성공했을 때 전달하는 dispatch __getTodos.API 메서드 들로 전달한다
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error); //dispatch와 같은기능 실패했을 때 전달하는 dispatch
    }
  }
);

const diraySlice = createSlice({
  name: 'diray',
  initialState,
  reducers: '',
  extraReducers: bulider => {
    bulider.addCase(__getDiray.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getDiray.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.diary = action.payload;
    });
    bulider.addCase(__getDiray.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const {} = diraySlice.actions;
export default diraySlice.reducer;
