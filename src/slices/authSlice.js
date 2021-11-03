import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import agent from './agent';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ username, password }) => {
    const { data: { token, account_id } } = await agent.post('/jwt', { username, password });
    const config = {
      headers: {
        'auth-token': token,
      },
      params: {
        account_ids: JSON.stringify([account_id]),
      },
    };
    const { data } = await agent.get('/account/batch', config);
    return {
      token, account_id, username, real_name: data[0].real_name,
    };
  },
);

export const signOut = createAction(
  'auth/signOut',
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { signedIn: false, token: null, userAccountId: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.signedIn = true;
        state.token = action.payload.token;
        state.userAccountId = action.payload.account_id;
      })
      .addCase(signOut, state => {
        state.signedIn = false;
        state.token = null;
      });
  },
});

export default authSlice;
