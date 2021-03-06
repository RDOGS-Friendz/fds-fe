import { createAsyncThunk } from '@reduxjs/toolkit';
import agent from './agent';

export const batchGetAccount = createAsyncThunk(
  'accounts/batchGetAccount',
  async ({ authToken, accountIds }, { getState }) => {
    const newAccountIds = accountIds.filter(id => !getState().accounts.ids.includes(id)); // not currently present
    if (newAccountIds.length === 0) return [];
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        account_ids: JSON.stringify(newAccountIds),
      },
    };
    const res = await agent.get('/account/batch', config);
    return res.data;
  },
);

export const batchGetCategory = createAsyncThunk(
  'categories/batchGetCategory',
  async ({ authToken, categoryIds }) => {
    if (categoryIds.length === 0) return [];
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        category_ids: JSON.stringify(categoryIds),
      },
    };
    const res = await agent.get('/category/batch', config);
    return res.data;
  },
);

export const batchGetLocation = createAsyncThunk(
  'locations/batchGetLocation',
  async ({ authToken, locationIds }) => {
    if (locationIds.length === 0) return [];
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        location_ids: JSON.stringify(locationIds),
      },
    };
    const res = await agent.get('/location/batch', config);
    return res.data;
  },
);

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

export const readLocation = createAsyncThunk(
  'locations/readEvent',
  async ({ authToken, location_id }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/location/${location_id}`, config);

    return res.data;
  },
);
