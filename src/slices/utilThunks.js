import { createAsyncThunk } from '@reduxjs/toolkit';
import agent from './agent';

export const batchGetAccount = createAsyncThunk(
  'accounts/batchGetAccount',
  async ({ authToken, accountIds }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        account_ids: JSON.stringify(accountIds),
      },
    };
    const res = await agent.get('/account/batch', config);
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