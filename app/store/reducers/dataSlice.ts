// import { assessments as demoAssessments, AssessmentStateType } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type dataStateProps = {
   questions?: any | null;
   assessments?: any | null;
   question_bank?: any | null;
   loading?: boolean;
   error?: string | null;
   assessmentCreating?: any | null;
};

const initialState: dataStateProps = {
   questions: [],
   assessments: [],
   question_bank: [],
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
      deleteAssessment: (state, action: PayloadAction<any>) => {
         console.log("redux", action.payload);
         const filteredAssessments = state.assessments.filter(
            (assessmentItem: any) => assessmentItem.id != action.payload
         );
         state.assessments = filteredAssessments;
      },
   },
});

export const { setAssessmentCreating, addQuestion, addAssessment, deleteAssessment } =
   dataSlice.actions;
export default dataSlice.reducer;
