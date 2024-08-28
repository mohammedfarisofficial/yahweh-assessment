"use client";
//redux and redux-persist
// import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "../store";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
