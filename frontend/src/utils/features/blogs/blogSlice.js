import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const API_URL = import.meta.env.REACT_APP_STRAPI_API_URL;
  const API_TOKEN = import.meta.env.REACT_APP_STRAPI_API_TOKEN;
  const response = await axios.get(
    `${API_URL}/api/blogs?_sort=createdAt:desc&_limit=3&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  return response.data.data;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default blogsSlice.reducer;