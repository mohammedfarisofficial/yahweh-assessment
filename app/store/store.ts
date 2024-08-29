import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from '@redux-devtools/extension';

import { useDispatch } from "react-redux";

import  authReducer from "./reducers/authSlice";
import dataReducer from "./reducers/dataSlice";
import uiReducer from "./reducers/uiSlice";

const rootReducer = combineReducers({
  authState: authReducer,
  dataState: dataReducer,
  uiState: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
