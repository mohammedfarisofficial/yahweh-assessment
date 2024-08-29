import { assessments as demoAssessments, AssessmentStateType } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type dataStateProps = {
   questions?: any | null;
   assessments?: AssessmentStateType[];
   loading?: boolean;
   error?: string | null;
   assessmentCreating?: any | null;
};

const initialState: dataStateProps = {
  questions: [],
   assessments: demoAssessments,
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
      addQuestion: (state, action: PayloadAction<any>)=> {
        console.log("redux",action.payload)
        state.questions.push(action.payload)
      }
   },
});

export const { setAssessmentCreating, addQuestion } = dataSlice.actions;
export default dataSlice.reducer;
