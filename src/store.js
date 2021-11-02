import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import accountsSlice from './slices/accountSlice';
import eventsSlice from './slices/eventsSlice';
import categoriesSlice from './slices/categoriesSlice';
import locationsSlice from './slices/locationsSlice';
import errorsReducer from './slices/errorsReducer';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    accounts: accountsSlice.reducer,
    events: eventsSlice.reducer,
    categories: categoriesSlice.reducer,
    locations: locationsSlice.reducer,
    errors: errorsReducer,
  },
});
export default store;
