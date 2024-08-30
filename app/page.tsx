"use client";
import * as ROUTES from "@/app/constants/routes";
import Link from "next/link";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import AssessmentItem from "@/components/assessment/assessment";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
// import { useSelector } from "react-redux";

import studentRoute from "@/app/auth/studentRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function Home() {
   // const { assessments } = useSelector((state) => state.dataState);
   const { authUser, isAuthenticated } = useSelector((state: RootState) => state.authState);
   console.log(authUser);
   return (
      <main className="pt-[80px] px-[2rem]">
         <Header>
            <div>
               <h1>List of Assessments</h1>
               <p className="text-gray-400 text-sm">Student dashboard</p>
            </div>
            <Link href={`/a/987654jkafqw34lj32jkljk`}>
               <Button>Create Assessment</Button>
            </Link>
         </Header>
         <div>
            <Table>
               <TableCaption>A list of your assessments.</TableCaption>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[100px]">Invoice</TableHead>
                     <TableHead>Status</TableHead>
                     <TableHead>Assessment type</TableHead>
                     <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow>
                     <TableCell className="font-medium">INV001</TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Assignment</TableCell>
                     <TableCell className="text-right">
                        <Link href={`/a/987654jkafqw34lj32jkljk`}>
                           <Button variant="secondary">Take</Button>
                        </Link>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">INV001</TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Survey</TableCell>
                     <TableCell className="text-right">
                        <Link href={`/a/987654jkafqw34lj32jkljk`}>
                           <Button variant="secondary">Take</Button>
                        </Link>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">INV001</TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Quiz</TableCell>
                     <TableCell className="text-right">
                        <Link href={`/a/987654jkafqw34lj32jkljk`}>
                           <Button variant="secondary">Take</Button>
                        </Link>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">INV001</TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Assignment</TableCell>
                     <TableCell className="text-right">
                        <Link href={`/a/987654jkafqw34lj32jkljk`}>
                           <Button variant="secondary">Take</Button>
                        </Link>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </main>
   );
}

export default studentRoute(Home);

// {/* student's home page
// # list fo assigment
// # popup for assigment overview */}
