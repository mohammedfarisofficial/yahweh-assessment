import { assessments as demoAssessments, AssessmentStateType } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type dataStateProps = {
   questions?: any | null;
   assessments?: any | null;
   loading?: boolean;
   error?: string | null;
   assessmentCreating?: any | null;
};

const initialState: dataStateProps = {
   questions: [],
   assessments: [],
   loading: false,
   error: null,
   assessmentCreating: null,
};

const dataSlice = createSlice({
   name: "dataState",
   initialState,
   reducers: {
      setAssessmentCreating: (state, action: PayloadAction<any>) => {
         state.assessmentCreating = action.payload;
      },
      addQuestion: (state, action: PayloadAction<any>) => {
         console.log("redux", action.payload);
         state.questions.push(action.payload);
      },
      addAssessment: (state, action: PayloadAction<any>) => {
         console.log("redux", action.payload);
         state.assessments.push(action.payload);
         state.assessmentCreating = null;
      },
   },
});

export const { setAssessmentCreating, addQuestion, addAssessment } = dataSlice.actions;
export default dataSlice.reducer;
