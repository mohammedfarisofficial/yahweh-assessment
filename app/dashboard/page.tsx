"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import * as ROUTES from "@/app/constants/routes";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { AssessmentStateType, AssessmentType } from "@/data";
import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import SearchBar from "@/components/search-bar";
import { Filter, ArrowDownUp } from "lucide-react";
import teacherRoute from "../auth/teacherRoute";
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteAssessment } from "../store/reducers/dataSlice";
import { useState } from "react";

const chartData = [
   { month: "January", desktop: 186, mobile: 80 },
   { month: "February", desktop: 305, mobile: 200 },
   { month: "March", desktop: 237, mobile: 120 },
   { month: "April", desktop: 73, mobile: 190 },
   { month: "May", desktop: 209, mobile: 130 },
   { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
   desktop: {
      label: "Desktop",
      color: "#2563eb",
   },
   mobile: {
      label: "Mobile",
      color: "#60a5fa",
   },
} satisfies ChartConfig;

const DashboardPage = () => {
   const [searchQuery, setSearchQuery] = useState<string>("");
   const { assessments } = useSelector((state: RootState) => state.dataState);

   const router = useRouter();
   const dispatch = useAppDispatch();

   const createAssessmentHandler = () => {
      const assessmentId = uuidv4();
      router.push(`${ROUTES.ASSESSMENT_CREATE}/${assessmentId}`);
   };
   const deleteAssessmentHandler = (assessmentId: string) => {
      dispatch(deleteAssessment(assessmentId));
   };
   const previewNavigateHandler = (assessmentId: string) => {
      router.push(
         `${ROUTES.DASHBOARD}/${ROUTES.ASSESSMENT_PREVIEW_ASSESSMENT_PREFIX}/${assessmentId}`
      );
   };

   return (
      <div className="w-full h-[100vh] flex items-center flex-col">
         <Header>
            <div>
               <h1>List of Assessments</h1>
               <p className="text-gray-400 text-sm">Assessment dashboard</p>
            </div>
            <Link href={ROUTES.ASSESSMENT_DRAFTS}>
               <Button variant="outline" className=" text-red-500">
                  Drafts
               </Button>
            </Link>
         </Header>

         <div className="w-full">
            <Tabs defaultValue="recent" className="space-y-4">
               <TabsList>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="my-assessments">My Assessments</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="archives">Archives</TabsTrigger>
                  <div className="absolute right-[2rem] flex gap-5">
                     <Button onClick={createAssessmentHandler}>Create Assessment</Button>
                  </div>
               </TabsList>
               <Header>
                  <div className="flex gap-5">
                     <SearchBar value={searchQuery} setValue={setSearchQuery} />
                     <Button variant="outline">
                        <ArrowDownUp className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <p className="ml-2">Sort</p>
                     </Button>
                     <Button variant="outline">
                        <Filter className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <p className="ml-2">Filter</p>
                     </Button>
                  </div>
               </Header>
               <TabsContent value="recent">
                  <Table>
                     <TableCaption>A list of your assessments.</TableCaption>
                     <TableHeader>
                        <TableRow>
                           <TableHead className="w-[100px]">Assessment ID</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Assessment type</TableHead>
                           <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {assessments && !!assessments.length ? (
                           assessments.map((assessment: AssessmentStateType, index: number) => (
                              <TableRow key={index}>
                                 <TableCell>{assessment?.id}</TableCell>
                                 <TableCell>{assessment?.title}</TableCell>
                                 <TableCell>{assessment?.type}</TableCell>

                                 <TableCell className="text-right">
                                    <AlertDialog>
                                       <AlertDialogTrigger asChild>
                                          <Button className="ml-2" variant="secondary">
                                             Delete
                                          </Button>
                                       </AlertDialogTrigger>
                                       <AlertDialogContent>
                                          <AlertDialogHeader>
                                             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                             <AlertDialogDescription>
                                                Are you sure you want to delete this assessment?
                                                This action is irreversible and will remove all
                                                associated questions.
                                             </AlertDialogDescription>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter>
                                             <AlertDialogCancel>Cancel</AlertDialogCancel>
                                             <AlertDialogAction
                                                onClick={() =>
                                                   deleteAssessmentHandler(assessment?.id)
                                                }
                                             >
                                                Continue
                                             </AlertDialogAction>
                                          </AlertDialogFooter>
                                       </AlertDialogContent>
                                    </AlertDialog>
                                    <Button className="ml-2" variant="secondary">
                                       Edit
                                    </Button>
                                    <Button
                                       onClick={() => previewNavigateHandler(assessment.id)}
                                       className="ml-2"
                                       variant="secondary"
                                    >
                                       View
                                    </Button>
                                 </TableCell>
                              </TableRow>
                           ))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={4} className="text-center">
                                 No assessments found
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TabsContent>
               <TabsContent value="my-assessments">
                  <Table>
                     <TableCaption>A list of your assessments.</TableCaption>
                     <TableHeader>
                        <TableRow>
                           <TableHead className="w-[100px]">Assessment ID</TableHead>
                           <TableHead>Title</TableHead>
                           <TableHead>Assessment type</TableHead>
                           <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                     </TableHeader>
                     <TableBody>
                        {assessments && !!assessments.length ? (
                           assessments.map((assessment: AssessmentStateType, index: number) => (
                              <TableRow key={index}>
                                 <TableCell>{assessment.id}</TableCell>
                                 <TableCell>{assessment.title}</TableCell>
                                 <TableCell>{assessment.type}</TableCell>

                                 <TableCell className="text-right">
                                    <Button className="ml-2" variant="secondary">
                                       Delete
                                    </Button>
                                    <Button className="ml-2" variant="secondary">
                                       Edit
                                    </Button>
                                    <Button className="ml-2" variant="secondary">
                                       View
                                    </Button>
                                 </TableCell>
                              </TableRow>
                           ))
                        ) : (
                           <TableRow>
                              <TableCell colSpan={4} className="text-center">
                                 No assessments found
                              </TableCell>
                           </TableRow>
                        )}
                     </TableBody>
                  </Table>
               </TabsContent>
               <TabsContent value="analytics">
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                     <BarChart accessibilityLayer data={chartData}>
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                     </BarChart>
                  </ChartContainer>
               </TabsContent>
               <TabsContent value="archives">
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                     <BarChart accessibilityLayer data={chartData}>
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                     </BarChart>
                  </ChartContainer>
               </TabsContent>
            </Tabs>
         </div>
      </div>
   );
};

export default teacherRoute(DashboardPage);
