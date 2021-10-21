import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '../agent';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }) => {
    const res = await agent.post('/account/jwt', { username, password });
    return res.data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
