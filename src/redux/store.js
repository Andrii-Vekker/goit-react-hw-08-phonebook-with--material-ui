import { configureStore } from "@reduxjs/toolkit";
import { filterSlise } from "./filterSlise";
import contactsReducer from "./contactsSlise";
import authReducer from "./auth/authSlise";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'token',
  storage,
    whitelist: ["token"]
};

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
       auth: persistedReducer,
        contacts: contactsReducer,
        filter: filterSlise.reducer
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

export const persistor = persistStore(store)