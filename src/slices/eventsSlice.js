import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import agent from './agent';

const eventsAdapter = createEntityAdapter({});

export const browseEvent = createAsyncThunk(
  'events/browseEvent',
  async ({
    authToken, view, search, limit, offset, reportEventIds,
  }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        view,
        search: JSON.stringify(search),
        limit,
        offset,
      },
    };

    const res = await agent.get('/event', config);

    reportEventIds(res.data.map(item => item.id));
    return res.data;
  },
);

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async ({
    authToken, title, is_private, location_id, category_id, intensity, start_time, end_time, num_people_wanted, description,
  }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.post('/event', {
      title, is_private, location_id, category_id, intensity, start_time, end_time, num_people_wanted, description,
    }, config);
  },
);

export const browseBookmarkedEvent = createAsyncThunk(
  'events/browseBookmarkedEvent',
  async ({ authToken, limit, offset }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        limit,
        offset,
      },
    };

    const res = agent.get('/event/bookmarked', config);

    return res.data;
  },
);

export const readEvent = createAsyncThunk(
  'events/readEvent',
  async ({ authToken, event_id }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/event/${event_id}`, config);

    return res.data;
  },
);

export const addBookmark = createAsyncThunk(
  'events/addBookmark',
  async ({ authToken, event_id }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.post(`/event/${event_id}/bookmark`, {}, config);
  },
);

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(readEvent.fulfilled, (state, action) => {
        eventsAdapter.upsertOne(state, action.payload);
      });
  },
});

export default eventsSlice;
