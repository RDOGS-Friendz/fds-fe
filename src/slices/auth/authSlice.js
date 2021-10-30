import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '../agent';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ username, password }) => {
    const res = await agent.post('/jwt', { username, password });
    return res.data;
  },
);

export const signOut = createAction(
  'auth/signOut',
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { signedIn: false, token: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.signedIn = true;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signOut, (state) => {
        state.signedIn = false;
        state.token = null;
      });
  },
});

export default authSlice;
