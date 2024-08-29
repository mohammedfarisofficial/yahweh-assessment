import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
   isCreateAssessmentDlgOpen: boolean;
};

const initialState: AuthState = {
   isCreateAssessmentDlgOpen: true,
};

const authSlice = createSlice({
   name: "ui",
   initialState,
   reducers: {
      setCreateAssessmentDlg: (state, action) => {
         state.isCreateAssessmentDlgOpen = action.payload;
      },
   },
});

export const { setCreateAssessmentDlg } = authSlice.actions;
export default authSlice.reducer;
