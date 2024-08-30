"use client";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDisclosure from "@/app/hooks/useDisclosure";
import { assessmentType } from "@/app/constants/assessment-type";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/header";

import * as ROUTES from "@/app/constants/routes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/search-bar";
import { ArrowDownUp, Filter, Settings } from "lucide-react";
import { Table, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";

// import { Step, Stepper } from "react-form-stepper";
import Problem from "@/components/problem/problem";
import { PROBLEM_ACCESS_TYPE_MODERATOR, PROBLEM_TYPE_SHORT } from "@/app/constants/problem-type";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { RootState, useAppDispatch } from "@/app/store/store";
import { addAssessment, setAssessmentCreating } from "@/app/store/reducers/dataSlice";
import { useSelector } from "react-redux";
import { setCreateAssessmentDlg } from "@/app/store/reducers/uiSlice";
import { VISIBILITY_ALL } from "@/app/constants/visibility-type";
import { ACCESS_ALL } from "@/app/constants/access-type";
import teacherRoute from "@/app/auth/teacherRoute";

type ProblemType = {
   id: string;
   title: string;
   instructions: string[] | [];
   type: string;
   questions: string[];
   created_by: string;
   created_at: string;
   visibility: string;
   access_permission: string;
   begin_time: string;
   begin_date: string;
   end_time: string;
   end_date: string;
   attempt_limit: number;
   feedback_timing: string;
   feedback_content: string;
   grade_config: string;
   notification_config: string;
};
const defaultProblem: ProblemType = {
   id: "",
   title: "",
   instructions: [
      "Read all questions carefully before answering.",
      "Manage your time wisely and double-check your answers.",
   ],
   type: "quiz",
   questions: [],
   created_by: "",
   created_at: "",
   visibility: VISIBILITY_ALL,
   access_permission: ACCESS_ALL,
   begin_time: "",
   begin_date: "",
   end_time: "",
   end_date: "",
   attempt_limit: 1,
   feedback_timing: "immediate", // immediate or after-assessment close
   feedback_content: "",
   grade_config: "immediate", // immediate or after-grade
   notification_config: "off", // on or off
};

const AssessmentCreate = () => {
   const [assessmentDetails, setAssessmentDetails] = useState<ProblemType>(defaultProblem);
   const { assessmentCreating } = useSelector((state: RootState) => state.dataState);
   const { questions } = useSelector((state: RootState) => state.dataState);
   const { isCreateAssessmentDlgOpen } = useSelector((state: RootState) => state.uiState);
   const { authUser } = useSelector((state: RootState) => state.authState);

   const { isOpen, onClose, setIsOpen } = useDisclosure(false);

   const { assessmentId } = useParams();

   const router = useRouter();
   const dispatch = useAppDispatch();

   const assessmentSetupHanlder = async () => {
      const updatedAssessmentDetails = {
         ...assessmentDetails,
         id: assessmentId.toString(),
         created_by: authUser.id,
      };

      setAssessmentDetails(updatedAssessmentDetails);
      if (updatedAssessmentDetails.id !== "" && updatedAssessmentDetails.title !== "") {
         dispatch(setAssessmentCreating(updatedAssessmentDetails));
         dispatch(setCreateAssessmentDlg(false));
      }
   };

   const editProblemHanlder = () => {
      router.push(
         `${ROUTES.ASSESSMENT_CREATE}/123/${ROUTES.ASSESSMENT_EDIT_PREFIX}/64f2eaf1b39b540001234579`
      );
   };
   const onChangeAssessmentDetails = ({ target }: any) => {
      const { name, value } = target;

      setAssessmentDetails((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };
   const onSelectTypeChange = (value: string) => {
      setAssessmentDetails((prevState) => ({
         ...prevState,
         type: value,
      }));
   };
   const navigateCreateQuestion = () => {
      const qnId = uuidv4();
      router.push(
         `${ROUTES.ASSESSMENT_CREATE}/${assessmentCreating?.id}/${ROUTES.ASSESSMENT_CREATE_PROBLEM_PREFIX}/${qnId}`
      );
   };
   const questions2Show = assessmentCreating?.questions.map((questionId: string) => {
      const questionFound = questions?.filter((question: any) => question?.id === questionId)[0];
      return questionFound;
   });
   // console.log(questions2Show);

   const uploadAssesmentHandler = () => {
      dispatch(addAssessment(assessmentCreating));
      dispatch(setCreateAssessmentDlg(true));
      onClose();
      router.back();
   };
   console.log("assessmentCreating", assessmentCreating);
   return (
      <div>
         <Header>
            <div>
               <h1>Assessment Settings - {assessmentCreating?.title}</h1>
               <p className="text-gray-400 text-sm">ID : {assessmentCreating?.id}</p>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
               <DialogTrigger asChild>
                  <Button>Upload Assessment</Button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                     <DialogTitle>Create New Assessement</DialogTitle>
                     <DialogDescription>Enter Title and select Assessment type</DialogDescription>
                  </DialogHeader>
                  {/* <div className="grid gap-4 py-4">
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                           Enter Title
                        </Label>
                        <Input name="title" placeholder="Enter title..." />
                     </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                           Assessment type
                        </Label>
                     </div>
                  </div> */}
                  <DialogFooter>
                     <Button onClick={uploadAssesmentHandler}>Upload</Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>
         </Header>
         <Dialog open={isCreateAssessmentDlgOpen}>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle>Create New Assessement</DialogTitle>
                  <DialogDescription>Enter Title and select Assessment type</DialogDescription>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                     <Label htmlFor="username" className="text-right">
                        Enter Title
                     </Label>
                     <Input
                        name="title"
                        onChange={onChangeAssessmentDetails}
                        placeholder="Enter title..."
                     />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                     <Label htmlFor="username" className="text-right">
                        Assessment type
                     </Label>
                     <Select onValueChange={onSelectTypeChange} value={assessmentDetails.type}>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Select assessment type" />
                        </SelectTrigger>
                        <SelectContent>
                           {assessmentType &&
                              !!assessmentType.length &&
                              assessmentType.map((type: string, index: number) => (
                                 <SelectItem key={index} value={type}>
                                    {type}
                                 </SelectItem>
                              ))}
                        </SelectContent>
                     </Select>
                  </div>
               </div>
               <DialogFooter>
                  <Button onClick={assessmentSetupHanlder} type="submit">
                     Create
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
         <div className="w-full">
            <Tabs defaultValue="questions" className="space-y-4">
               <TabsList>
                  <TabsTrigger value="questions">Questions</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                  {/* <div className="absolute right-[2rem] flex gap-5">
              <Link href={ROUTES.ASSESSMENT_QN_BANK}>
                <Button variant="outline">Question Bank</Button>
              </Link>
              <Link href={ROUTES.ASSESSMENT_CREATE}>
                <Button>Create Assessment</Button>
              </Link>
            </div> */}
               </TabsList>
               <TabsContent value="questions">
                  <Container>
                     <div />
                     <div className="flex gap-3">
                        <Link href={ROUTES.ASSESSMENT_QN_BANK}>
                           <Button variant="secondary">Browse Question Bank</Button>
                        </Link>
                        <Button onClick={navigateCreateQuestion}>Create Question</Button>
                     </div>
                  </Container>
                  {questions2Show && !!questions2Show.length ? (
                     questions2Show.map((question: any, index: number) => (
                        <Card key={index} className="flex flex-col gap-5 p-5">
                           <div>
                              <p>
                                 Question {index + 1}: {question?.question}
                              </p>
                           </div>
                        </Card>
                     ))
                  ) : (
                     <h3>No Assessments</h3>
                  )}
               </TabsContent>
               <TabsContent value="settings">
                  <Card className="px-5">
                     <Container>
                        <div>
                           <p>Visibility</p>
                           <p className="text-sm text-gray-400">Set who can view your assessment</p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Access permission</p>
                           <p className="text-sm text-gray-400">
                              Set who can access your accessment
                           </p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Begin ( Time and Date ) </p>
                           <p className="text-sm text-gray-400">When assessment should begin</p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>End ( Time and Date ) </p>
                           <p className="text-sm text-gray-400">When assessment should end</p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Attempt Limit</p>
                           <p className="text-sm text-gray-400">
                              Set how many times students can attempt the assessment
                           </p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Feedback Timing</p>
                           <p className="text-sm text-gray-400">
                              Set when the student should receive the feedback
                           </p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Feedback Content</p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Grade Display Options</p>
                           <p className="text-sm text-gray-400">
                              Set when the student can see the grades of the assessment
                           </p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Notification Settings</p>
                           <p className="text-sm text-gray-400">
                              By turning ON you can receive notifications
                           </p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>
      </div>
   );
};

export default teacherRoute(AssessmentCreate);