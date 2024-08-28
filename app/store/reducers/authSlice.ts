import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthenticated: boolean;
  authUser: any;
};

const initialState: AuthState = {
  isAuthenticated: false,
  authUser: null,
};

const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.authUser = action.payload;
      state.isAuthenticated = true;
    },
    setLogout: (state, action) => {
      //   state = initialState;
      state.authUser = null
      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, setLogout } = authSlice.actions;
export default authSlice.reducer;
