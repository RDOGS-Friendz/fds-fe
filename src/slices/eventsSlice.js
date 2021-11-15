import {
  createAsyncThunk, createEntityAdapter, createSlice,
} from '@reduxjs/toolkit';
import { batchGetAccount } from './utilThunks';
import agent from './agent';

const eventsAdapter = createEntityAdapter({});

export const browseEvent = createAsyncThunk(
  'events/browseEvent',
  async ({
    authToken, view, search, limit, offset, reportEventIds,
  }, { dispatch }) => {
    const config1 = {
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

    const res1 = await agent.get('/event', config1);

    const locationIds = [...new Set(res1.data.data.map(item => item.location_id))];
    const categoryIds = [...new Set(res1.data.data.map(item => item.category_id))];
    const participantAccountIds = [...new Set(res1.data.data.map(item => item.participant_ids.concat([item.creator_account_id])).flat())];

    const config2 = {
      headers: {
        'auth-token': authToken,
      },
    };

    const [res2, res3] = await Promise.all(
      [
        Promise.all([...new Set(locationIds)].map(async item => (await agent.get(`/location/${item}`, config2)).data)),
        Promise.all([...new Set(categoryIds)].map(async item => (await agent.get(`/category/${item}`, config2)).data)),
        dispatch(batchGetAccount({ authToken, accountIds: participantAccountIds })),
      ],
    );

    reportEventIds(res1.data.data.map(item => item.id), res1.data.total_count);

    return {
      events: res1.data.data,
      locations: res2,
      categories: res3,
    };
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

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async ({
    authToken, title, is_private, location_id, category_id, intensity, start_time, end_time, num_people_wanted, description,
  }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.post('/event', {
      title, is_private, location_id, category_id, intensity, start_time, end_time, num_people_wanted, description,
    }, config);

    dispatch(readEvent({ authToken, event_id: res.data.id }));
  },
);

export const joinEvent = createAsyncThunk(
  'events/joinEvent',
  async ({ authToken, event_id }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };
    await agent.post(`/event/${event_id}/join`, {}, config);

    dispatch(readEvent({ authToken, event_id }));
  },
);

export const cancelJoinEvent = createAsyncThunk(
  'events/cancelJoinEvent',
  async ({ authToken, event_id }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };
    await agent.delete(`/event/${event_id}/join`, config);

    dispatch(readEvent({ authToken, event_id }));
  },
);

export const addBookmark = createAsyncThunk(
  'events/addBookmark',
  async ({ authToken, event_id }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.post(`/event/${event_id}/bookmark`, {}, config);

    dispatch(readEvent({ authToken, event_id }));
  },
);

export const deleteBookmark = createAsyncThunk(
  'events/deleteBookmark',
  async ({ authToken, event_id }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };
    await agent.delete(`/event/${event_id}/bookmark`, config);

    dispatch(readEvent({ authToken, event_id }));
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
      })
      .addCase(browseEvent.fulfilled, (state, action) => {
        eventsAdapter.upsertMany(state, action.payload.events);
      });
  },
});

export default eventsSlice;
