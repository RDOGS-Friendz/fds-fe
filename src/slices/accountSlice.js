import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import agent from './agent';

import { resumeSignIn, signIn } from './authSlice';
import { browseEvent } from './eventsSlice';

const accountsAdapter = createEntityAdapter({
  selectId: account => account.account_id,
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
    username, password, real_name, email, gender,
  }) => {
    await agent.post('/account', {
      username, password, real_name, email, gender,
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

export const editAccountProfile = createAsyncThunk(
  'accounts/editAccountProfile',
  async ({ authToken, account_id, tagline, department, social_media_acct, birthday, preferred_category_id }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.patch(`/account/${account_id}/profile`, {
      tagline,
      department,
      social_media_acct,
      birthday,
      preferred_category_id,
    }, config);
  },
);

export const readAccountFriends = createAsyncThunk(
  'accounts/readAccountFriends',
  async ({ authToken, accountId }) => {
    const config1 = {
      headers: {
        'auth-token': authToken,
      },
    };

    const { data: { friend_account_id } } = await agent.get(`/account/${accountId}/friends`, config1);
    const config2 = {
      headers: {
        'auth-token': authToken,
      },
      params: {
        account_ids: JSON.stringify(friend_account_id),
      },
    };
    const { data } = await agent.get('/account/batch', config2);
    return data;
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
          accountsAdapter.upsertOne(state, { account_id: action.meta.arg.accountId, friendAccountIds: action.payload });
        },
      )
      .addCase(
        readAccountFriendRequests.fulfilled, (state, action) => {
          accountsAdapter.upsertOne(state, { account_id: action.meta.arg.accountId, friendRequestIds: action.payload });
        },
      )

      .addCase(
        signIn.fulfilled, (state, action) => {
          const { account_id, username, real_name } = action.payload;
          accountsAdapter.upsertOne(state, { account_id, username, real_name });
        },
      )
      .addCase(
        resumeSignIn.fulfilled, (state, action) => {
          const { account_id, username, real_name } = action.payload;
          accountsAdapter.upsertOne(state, { account_id, username, real_name });
        },
      )

      .addCase(
        browseEvent.fulfilled, (state, action) => {
          const { accounts } = action.payload;
          accountsAdapter.upsertMany(state, accounts);
        },
      );
  },
});

export default accountsSlice;
