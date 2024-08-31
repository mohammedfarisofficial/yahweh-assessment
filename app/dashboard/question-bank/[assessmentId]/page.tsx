"use client";
import Link from "next/link";
import * as ROUTES from "@/app/constants/routes";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import teacherRoute from "@/app/auth/teacherRoute";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
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
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const QuestionBank = () => {
   const { questions } = useSelector((state: RootState) => state.dataState);
   return (
      <div className="flex flex-col gap-5">
         <Header>
            <div>
               <h1>Question Bank</h1>
               <p className="text-gray-400 text-sm">Question bank quesions</p>
            </div>
            <div />
         </Header>
         <Table>
            <TableCaption>A list of your assessments.</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Question type</TableHead>
                  <TableHead className="text-right">Action</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {questions && !!questions.length ? (
                  questions.map((question: any, index: number) => (
                     <TableRow key={index}>
                        <TableCell>{question?.question}</TableCell>
                        <TableCell>{question?.questiontype}</TableCell>

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
                                       Are you sure you want to delete this Question?
                                    </AlertDialogDescription>
                                 </AlertDialogHeader>
                                 <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                    // onClick={() =>
                                    //    deleteAssessmentHandler(assessment?.id)
                                    // }
                                    >
                                       Delete
                                    </AlertDialogAction>
                                 </AlertDialogFooter>
                              </AlertDialogContent>
                           </AlertDialog>
                           <Button className="ml-2">Import</Button>
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
      </div>
   );
};

export default teacherRoute(QuestionBank);
