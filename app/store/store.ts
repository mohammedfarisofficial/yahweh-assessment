"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import authReducer from "./reducers/authSlice";
import dataReducer from "./reducers/dataSlice";

const rootReducer = combineReducers({
  authState: authReducer,
  dataState: dataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
