import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { heroApi } from './heroesSlice';
import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

export const changeFilter = createAction('heroes/filter');

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const store = configureStore({
  reducer: {
    [heroApi.reducerPath]: heroApi.reducer,
    filter: filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(heroApi.middleware),
});

setupListeners(store.dispatch);
