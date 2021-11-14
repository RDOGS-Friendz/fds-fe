import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import agent from './agent';
import { readCategory } from './utilThunks';
import { browseEvent } from './eventsSlice';

const categoriesAdapter = createEntityAdapter({});

export const browseAllCategory = createAsyncThunk(
  'categories/browseAllCategory',
  async ({ authToken, search, reportCategoryIds }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        search,
      },
    };

    const res = await agent.get('/category', config);

    reportCategoryIds(res.data);
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
      })
      .addCase(browseAllCategory.fulfilled, (state, action) => {
        categoriesAdapter.upsertMany(state, action.payload);
      })

      .addCase(browseEvent.fulfilled, (state, action) => {
        categoriesAdapter.upsertMany(state, action.payload.categories);
      });
  },
});

export default categoriesSlice;
