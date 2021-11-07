import { createReducer } from '@reduxjs/toolkit';

const locallyHandledErrors = ['auth/signin/rejected', 'accounts/signup/rejected'];

const errorsReducer = createReducer(
  {},
  builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('rejected') && !locallyHandledErrors.includes(action.type),
        (state, action) => {
          state[action.type.slice(0, -('/rejected'.length))] = action.error;
        },
      );
  },
);

export default errorsReducer;
