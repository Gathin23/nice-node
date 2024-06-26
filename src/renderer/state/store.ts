import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import modalReducer from './modal';
import { RtkqNetwork } from './network';
import nodeReducer from './node';
import { RtkqNodeService } from './nodeService';
import { RtkqNotificationsService } from './notificationsService';
import { RtkqExecutionWs } from './services';
import { RtkqSettingsService } from './settingsService';

export const store = configureStore({
  reducer: {
    node: nodeReducer,
    modal: modalReducer,
    [RtkqNodeService.reducerPath]: RtkqNodeService.reducer,
    [RtkqSettingsService.reducerPath]: RtkqSettingsService.reducer,
    [RtkqExecutionWs.reducerPath]: RtkqExecutionWs.reducer,
    [RtkqNetwork.reducerPath]: RtkqNetwork.reducer,
    [RtkqNotificationsService.reducerPath]: RtkqNotificationsService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(RtkqNodeService.middleware)
      .concat(RtkqSettingsService.middleware)
      .concat(RtkqExecutionWs.middleware)
      .concat(RtkqNetwork.middleware)
      .concat(RtkqNotificationsService.middleware),
});
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
