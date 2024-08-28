import { assessments as demoAssessments, AssessmentStateType } from "@/data";
import { createSlice } from "@reduxjs/toolkit";

export type dataStateProps = {
  assessments: AssessmentStateType[];
  loading: boolean;
  error: string | null;
};

const initialState: dataStateProps = {
  assessments: demoAssessments,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "dataState",
  initialState,
  reducers: {
    // set: (state, action) => {},
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
