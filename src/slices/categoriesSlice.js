import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import agent from './agent';

const categoriesAdapter = createEntityAdapter({});

export const readCategory = createAsyncThunk(
  'categories/readEvent',
  async ({ authToken, category_id }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/category/${category_id}`, config);

    return res.data;
  },
);

export const browseAllCategory = createAsyncThunk(
  'categories/browseAllCategory',
  async ({ authToken }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get('/category', config);

    return res.data;
  },
);

const categoriesSlice = createSlice({
  name: 'events',
  initialState: categoriesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(readCategory.fulfilled, (state, action) => {
        categoriesAdapter.upsertOne(state, action.payload);
      });
  },
});

export default categoriesSlice;
