import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import agent from './agent';
import { browseEvent } from './eventsSlice';

const locationsAdapter = createEntityAdapter({});

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

export const browseAllLocation = createAsyncThunk(
  'locations/browseAllLocation',
  async ({ authToken, search, reportLocationIds }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        search,
      },
    };

    const res = await agent.get('/location', config);

    reportLocationIds(res.data);
    return res.data;
  },
);

export const addLocation = createAsyncThunk(
  'locations/addLocation',
  async ({
    authToken, name, type, lat = 0, lng = 0,
  }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get('/location', {
      authToken, name, type, lat, lng,
    }, config);

    return res.data;
  },
);

const locationsSlice = createSlice({
  name: 'events',
  initialState: locationsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(readLocation.fulfilled, (state, action) => {
        locationsAdapter.upsertOne(state, action.payload);
      })
      .addCase(browseAllLocation.fulfilled, (state, action) => {
        locationsAdapter.upsertMany(state, action.payload);
      })
      .addCase(browseEvent.fulfilled, (state, action) => {
        locationsAdapter.upsertMany(state, action.payload.locations);
      });
  },
});

export default locationsSlice;
