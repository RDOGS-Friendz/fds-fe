import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import agent from './agent';

import { signIn } from './authSlice';

const accountsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.username?.localeCompare(b.username) ?? -1,
});

// export const browseAccount = createAsyncThunk(
//   'accounts/browseAccount',
//   async ({ authToken, search }) => {
//     const config = {
//       headers: {
//         'auth-token': authToken,
//       },
//       params: {
//         search: JSON.stringify(search ?? []),
//       },
//     };
//     const res = await agent.get('/account', config);
//     return res.data;
//   },
// );

export const signup = createAsyncThunk(
  'accounts/signup',
  async ({
    username, password, realName, email, gender,
  }) => {
    await agent.post('/account', {
      username, password, real_name: realName, email, gender,
    });
  },
);

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

export const editAccountPrivacy = createAsyncThunk(
  'accounts/batchGetAccount',
  async ({
    authToken, accountId, displayRealName, displayBirthday,
  }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.patch(`/account/${accountId}/privacy`, {
      display_real_name: displayRealName,
      display_birthday: displayBirthday,
    }, config);
  },
);

export const readAccountProfile = createAsyncThunk(
  'accounts/readAccountProfile',
  async ({ authToken, accountId }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/account/${accountId}/profile`, config);
    return res.data;
  },
);

export const readAccountFriends = createAsyncThunk(
  'accounts/readAccountFriends',
  async ({ authToken, accountId }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/account/${accountId}/friends`, config);
    return res.data;
  },
);

export const readAccountFriendRequests = createAsyncThunk(
  'accounts/readAccountFriendRequests',
  async ({ authToken, accountId }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/account/${accountId}/friend-request`, config);
    return res.data;
  },
);

export const sendFriendRequest = createAsyncThunk(
  'accounts/sendFriendRequest',
  async ({ authToken, accountId, otherAccountId }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.post(`/account/${accountId}/friend-request`, { friend_account_id: otherAccountId }, config);
  },
);

export const acceptFriendRequest = createAsyncThunk(
  'accounts/acceptFriendRequest',
  async ({ authToken, accountId, friendRequestId }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.patch(`/account/${accountId}/friend-request`, { friends_request_id: friendRequestId, action: 'accept' }, config);
  },
);

export const declineFriendRequest = createAsyncThunk(
  'accounts/declineFriendRequest',
  async ({ authToken, accountId, friendRequestId }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.patch(`/account/${accountId}/friend-request`, { friends_request_id: friendRequestId, action: 'decline' }, config);
  },
);

const accountsSlice = createSlice({
  name: 'friends',
  initialState: accountsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        batchGetAccount.fulfilled, (state, action) => {
          accountsAdapter.upsertMany(state, action.payload);
        },
      )
      .addCase(
        readAccountProfile.fulfilled, (state, action) => {
          accountsAdapter.upsertOne(state, action.payload);
        },
      )
      .addCase(
        readAccountFriends.fulfilled, (state, action) => {
          accountsAdapter.upsertOne(state, { id: action.meta.arg.accountId, friendAccountIds: action.payload });
        },
      )
      .addCase(
        readAccountFriendRequests.fulfilled, (state, action) => {
          accountsAdapter.upsertOne(state, { id: action.meta.arg.accountId, friendRequestIds: action.payload });
        },
      )

      .addCase(
        signIn.fulfilled, (state, action) => {
          const { account_id: id, username, real_name } = action.payload;
          accountsAdapter.upsertOne(state, { id, username, real_name });
        },
      );
  },
});

export default accountsSlice;
