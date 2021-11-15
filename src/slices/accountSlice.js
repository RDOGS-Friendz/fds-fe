import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import agent from './agent';

import { resumeSignIn, signIn } from './authSlice';
import { batchGetAccount, readCategory } from './utilThunks';

const accountsAdapter = createEntityAdapter({
  selectId: account => account.account_id,
  sortComparer: (a, b) => a.username?.localeCompare(b.username) ?? -1,
});

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
  async ({ authToken, accountId }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/account/${accountId}/profile`, config);

    res.data.preferred_category_id.map(id => dispatch(readCategory({ authToken, category_id: id })));
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
  async ({ authToken, accountId }, { dispatch }) => {
    const config1 = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/account/${accountId}/friends`, config1);

    dispatch(batchGetAccount({ authToken, accountIds: res.data.friend_account_id }));
    return res.data;
  },
);

export const readAccountFriendRequests = createAsyncThunk(
  'accounts/readAccountFriendRequests',
  async ({ authToken, accountId }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    const res = await agent.get(`/account/${accountId}/friend-request`, config);

    dispatch(batchGetAccount({ authToken, accountIds: res.data.friend_request_id }));
    return res.data;
  },
);

export const sendFriendRequest = createAsyncThunk(
  'accounts/sendFriendRequest',
  async ({ authToken, accountId, otherAccountId }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.post(`/account/${accountId}/friend-request`, { friend_account_id: otherAccountId }, config);
    dispatch(readAccountFriendRequests({ authToken, accountId }));
  },
);

export const acceptFriendRequest = createAsyncThunk(
  'accounts/acceptFriendRequest',
  async ({ authToken, accountId, otherAccountId }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.patch(`/account/${accountId}/friend-request`, { friend_request_id: otherAccountId, action: 'accept' }, config);
    dispatch(readAccountFriendRequests({ authToken, accountId }));
    dispatch(readAccountFriends({ authToken, accountId }));
  },
);

export const declineFriendRequest = createAsyncThunk(
  'accounts/declineFriendRequest',
  async ({ authToken, accountId, otherAccountId }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
    };

    await agent.patch(`/account/${accountId}/friend-request`, { friends_request_id: otherAccountId, action: 'decline' }, config);
    dispatch(readAccountFriendRequests({ authToken, accountId }));
  },
);

export const deleteFriend = createAsyncThunk(
  'accounts/deleteFriend',
  async ({ authToken, accountId, friendAccountId }, { dispatch }) => {
    const config = {
      headers: {
        'auth-token': authToken,
      },
      data: {
        friend_id: friendAccountId,
      },
    };

    await agent.delete(`/account/${accountId}`, config);
    dispatch(readAccountFriendRequests({ authToken, accountId }));
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
          accountsAdapter.upsertOne(state, { account_id: action.meta.arg.accountId, friendAccountIds: action.payload.friend_account_id });
        },
      )
      .addCase(
        readAccountFriendRequests.fulfilled, (state, action) => {
          accountsAdapter.upsertOne(state, { account_id: action.meta.arg.accountId, friendRequestAccountIds: action.payload.friend_request_id });
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
      );
  },
});

export default accountsSlice;
