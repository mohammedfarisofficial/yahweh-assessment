"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import Answer from "@/components/problem/answer";
import {
   PROBLEM_ACCESS_TYPE_MODERATOR,
   PROBLEM_TYPE_LONG,
   PROBLEM_TYPE_MULTIPLE,
   PROBLEM_TYPE_SHORT,
   PROBLEM_TYPE_TRUE_OR_FALSE,
} from "@/app/constants/problem-type";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { useToast } from "@/components/ui/use-toast";
import { useParams } from "next/navigation";

type ProblemType = {
   id: string;
   question: string;
   questiontype: string;
   created_by: string;
   answers: string[] | [];
   correct_answer: string;
};
const defaultProblem: ProblemType = {
   id: "",
   question: "",
   questiontype: PROBLEM_TYPE_SHORT,
   created_by: "",
   answers: [],
   correct_answer: "",
};
const trueOrFalseDefault = ["true", "false"];

const CreateProblem = () => {
   const [problemDetails, setProblemDetails] = useState<ProblemType>(defaultProblem);
   const [newOption, setNewOption] = useState<string>("");

   const { assessmentId, problemId } = useParams();

   const { toast } = useToast();

   useEffect(() => {
      const createdById = "64d2eaf1b39b540001234571";
      setProblemDetails((prevState) => ({
         ...prevState,
         created_by: createdById,
      }));
   }, []);

   useEffect(() => {
      if (problemDetails.questiontype === PROBLEM_TYPE_TRUE_OR_FALSE) {
         setProblemDetails((prevState) => ({
            ...prevState,
            answers: trueOrFalseDefault,
            correct_answer: "true",
         }));
      } else {
         setProblemDetails((prevState) => ({
            ...prevState,
            answers: [],
            correct_answer: "",
         }));
      }
   }, [problemDetails.questiontype]);

   const onTypeChange = (value: string) => {
      setProblemDetails((prevState) => ({ ...prevState, questiontype: value }));
   };
   const onCorrectAnswerChange = (correctAnswer: string) => {
      setProblemDetails((prevState) => ({ ...prevState, correct_answer: correctAnswer }));
   };
   const onChangeInput = ({ target }: any) => {
      const { name, value } = target;
      setProblemDetails((prevState) => ({ ...prevState, [name]: value }));
   };
   const addNewOption = () => {
      if (problemDetails.questiontype != PROBLEM_TYPE_MULTIPLE) {
         return;
      }
      if (problemDetails.answers.length > 4) {
         console.log("Selection Limit: Maximum 5 Options Allowed");
         toast({
            title: "Maximum 5 Options Allowed",
            description: "You've reached the limit of 5 options",
         });
         return;
      }
      const isAlreadyExist = problemDetails.answers.filter((answer) => answer === newOption);

      if (!isAlreadyExist.length) {
         setProblemDetails((prevState) => ({
            ...prevState,
            answers: [...problemDetails.answers, newOption],
         }));
      } else {
         toast({
            title: "Option answer already exist!",
         });
      }
   };
   const clearProblemHanlder = () => {
      console.log("Clear Problem");
      console.log(defaultProblem)
      setProblemDetails(defaultProblem);
   };
   const createProblemHandler = () => {
      // console.log(assessmentId, problemId);
      // return;
      const id = uuidv4();
      setProblemDetails((prevState) => ({
         ...prevState,
         id,
      }));
      console.log("problemDetails", problemDetails);
   };

   return (
      <div>
         <Header>
            <div>
               <h1>Create Problem</h1>
               <p className="text-gray-400 text-sm">ID : 64f2eaf1b39b540001234579</p>
            </div>
            <Button onClick={clearProblemHanlder} variant="link">
               Clear
            </Button>
         </Header>
         <div className="flex flex-col gap-5">
            <div>
               <Label htmlFor="question">Enter the Question</Label>
               <Input value={problemDetails.question} name="question" onChange={onChangeInput} placeholder="Enter the question" />
            </div>
            <div>
               <Label htmlFor="username" className="text-right">
                  Assessment type
               </Label>
               <Select value={problemDetails.questiontype} onValueChange={onTypeChange}>
                  <SelectTrigger className="w-[180px]">
                     <SelectValue placeholder="Assessment type" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value={PROBLEM_TYPE_SHORT}>{PROBLEM_TYPE_SHORT}</SelectItem>
                     <SelectItem value={PROBLEM_TYPE_LONG}>{PROBLEM_TYPE_LONG}</SelectItem>
                     <SelectItem value={PROBLEM_TYPE_TRUE_OR_FALSE}>
                        {PROBLEM_TYPE_TRUE_OR_FALSE}
                     </SelectItem>
                     <SelectItem value={PROBLEM_TYPE_MULTIPLE}>{PROBLEM_TYPE_MULTIPLE}</SelectItem>
                  </SelectContent>
               </Select>
            </div>
            {problemDetails.questiontype === PROBLEM_TYPE_TRUE_OR_FALSE && (
               <>
                  <Container>
                     <Label htmlFor="username">Correct option</Label>
                     <Select onValueChange={onCorrectAnswerChange}>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Correct option" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="true">true</SelectItem>
                           <SelectItem value="false">false</SelectItem>
                        </SelectContent>
                     </Select>
                  </Container>
               </>
            )}
            {problemDetails.questiontype === PROBLEM_TYPE_MULTIPLE && (
               <>
                  <Container>
                     <div className="w-full">
                        <Label htmlFor="username">Add new option</Label>
                        <Input
                           name="new-option"
                           value={newOption}
                           onChange={({ target }: any) => setNewOption(target.value)}
                           placeholder="Enter new option to add..."
                        />
                     </div>
                     <Button onClick={addNewOption}>Add</Button>
                  </Container>
                  {!!problemDetails.answers.length && (
                     <Container>
                        <Label htmlFor="username">Correct option</Label>
                        <Select onValueChange={onCorrectAnswerChange}>
                           <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Correct option" />
                           </SelectTrigger>
                           <SelectContent>
                              {problemDetails.answers.map((answer, index) => (
                                 <SelectItem key={index} value={answer}>
                                    {answer}
                                 </SelectItem>
                              ))}
                              {/* <SelectItem value={PROBLEM_TYPE_SHORT}>
                                 {PROBLEM_TYPE_SHORT}
                              </SelectItem>
                              <SelectItem value={PROBLEM_TYPE_LONG}>{PROBLEM_TYPE_LONG}</SelectItem>
                              <SelectItem value={PROBLEM_TYPE_TRUE_OR_FALSE}>
                                 {PROBLEM_TYPE_TRUE_OR_FALSE}
                              </SelectItem>
                              <SelectItem value={PROBLEM_TYPE_MULTIPLE}>
                                 {PROBLEM_TYPE_MULTIPLE}
                              </SelectItem> */}
                           </SelectContent>
                        </Select>
                     </Container>
                  )}
               </>
            )}
            {problemDetails.questiontype != PROBLEM_TYPE_SHORT &&
               problemDetails.questiontype != PROBLEM_TYPE_LONG && (
                  <div>
                     <Label htmlFor="username">Set answer</Label>
                     <Answer
                        questiontype={problemDetails.questiontype}
                        answers={problemDetails.answers}
                        correct_answer={problemDetails.correct_answer}
                        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
                     />
                  </div>
               )}
         </div>
         <div className="mt-10 flex justify-end gap-5">
            <Button variant="outline">Cancel</Button>
            <Button onClick={createProblemHandler}>Create Problem</Button>
         </div>
      </div>
   );
};

export default CreateProblem;
