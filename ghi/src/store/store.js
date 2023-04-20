import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore, persistReducer, REGISTER } from "redux-persist";
import { authApi } from "./authApi";
import userReducer from "./userSlice";
import { userSlice } from "./userSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { quizgameSlice } from "./quizgameSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [],
};

export const rootReducers = combineReducers({
  auth: userSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  user: userReducer,
  quizgame: quizgameSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [REGISTER],
      },
    }).concat(authApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
