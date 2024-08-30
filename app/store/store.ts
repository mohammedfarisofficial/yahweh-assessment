import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from '@redux-devtools/extension';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { useDispatch } from "react-redux";

import authReducer from "./reducers/authSlice";
import dataReducer from "./reducers/dataSlice";
import uiReducer from "./reducers/uiSlice";

const persistConfig = {
   key: "root",
   storage,
};

const rootReducer = combineReducers({
   authState: authReducer,
   dataState: dataReducer,
   uiState: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   devTools: true,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
