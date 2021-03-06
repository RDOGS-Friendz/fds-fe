import {
  createAsyncThunk, createEntityAdapter, createSlice,
} from '@reduxjs/toolkit';
import { batchGetAccount, batchGetCategory, batchGetLocation } from './utilThunks';
import agent from './agent';

const eventsAdapter = createEntityAdapter({});

export const browseEvent = createAsyncThunk(
  'events/browseEvent',
  async ({
    authToken, view, search, limit, offset, reportEventIds,
  }, { dispatch }) => {
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

    const locationIds = [...new Set(res.data.data.map(item => item.location_id))];
    const categoryIds = [...new Set(res.data.data.map(item => item.category_id))];
    const participantAccountIds = [
      ...new Set(
        res.data.data
          .map(item => item.participant_ids
            .concat([item.creator_account_id]))
          .flat(),
      ),
    ];

    await Promise.all(
      [
        dispatch(batchGetAccount({ authToken, accountIds: participantAccountIds })),
        dispatch(batchGetCategory({ authToken, categoryIds })),
        dispatch(batchGetLocation({ authToken, locationIds })),
      ],
    );

    reportEventIds(res.data.data.map(item => item.id), res.data.total_count, offset);

    return res.data.data;
  },
);

export const browseEventByAccount = createAsyncThunk(
  'events/browseEventByAccount',
  async ({ authToken, account_id, view = 'ALL', limit, offset, reportEventIds }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        view,
        limit,
        offset,
      },
    };

    const res = await agent.get(`/account/${account_id}/event`, config);

    const locationIds = [...new Set(res.data.data.map(item => item.location_id))];
    const categoryIds = [...new Set(res.data.data.map(item => item.category_id))];
    const participantAccountIds = [
      ...new Set(
        res.data.data
          .map(item => item.participant_ids
            .concat([item.creator_account_id]))
          .flat(),
      ),
    ];

    await Promise.all(
      [
        dispatch(batchGetAccount({ authToken, accountIds: participantAccountIds })),
        dispatch(batchGetCategory({ authToken, categoryIds })),
        dispatch(batchGetLocation({ authToken, locationIds })),
      ],
    );

    reportEventIds(res.data.data.map(item => item.id), res.data.total_count, offset);

    return res.data.data;
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

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async ({ authToken, event_id }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };
    await agent.delete(`/event/${event_id}`, config);

    return event_id;
  },
);

export const editEvent = createAsyncThunk(
  'events/editEvent',
  async ({
    authToken, event_id, title, is_private, location_id, category_id, intensity, start_time, end_time, num_people_wanted, description,
  }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.patch(`/event/${event_id}`, {
      title, is_private, location_id, category_id, intensity, start_time, end_time, num_people_wanted, description,
    }, config);

    dispatch(readEvent({ authToken, event_id }));
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
      .addCase(deleteEvent.fulfilled, (state, action) => {
        eventsAdapter.removeOne(state, action.payload);
      })
      .addCase(browseEvent.fulfilled, (state, action) => {
        eventsAdapter.upsertMany(state, action.payload);
      })
      .addCase(browseEventByAccount.fulfilled, (state, action) => {
        eventsAdapter.upsertMany(state, action.payload);
      });
  },
});

export default eventsSlice;
