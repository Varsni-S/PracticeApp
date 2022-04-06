import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//create the action
export const fetchPost = createAsyncThunk(
  'post/list',
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      const {data} = await axios.get('https://reactnative.dev/movies.json');
      return data;
    } catch (error) {
      return error?.response;
    }
  },
);

//slices
const postSlices = createSlice({
  name: 'post',
  initialState: {},
  extraReducers: {
    //handle pending state
    [fetchPost.pending]: (state, action) => {
      state.loading = true;
    },
    //handle fulfilled
    [fetchPost.fulfilled]: (state, action) => {
      state.postsList = action.payload;
      state.loading = false;
    },
    //handle rejected
    [fetchPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlices.reducer;
