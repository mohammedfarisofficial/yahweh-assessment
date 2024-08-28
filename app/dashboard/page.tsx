"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// constants
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
import { setLogout } from "../store/reducers/authSlice";
import { useSelector } from "react-redux";
import { AssessmentStateType, AssessmentType } from "@/data";

import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import SearchBar from "@/components/search-bar";
import { Filter, ArrowDownUp } from "lucide-react";

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
  const router = useRouter();

  const { assessments } = useSelector((state: RootState) => state.dataState);

  const createAssessmentHandler = () => {
    console.log("navigate to create Assessment");
    router.push(ROUTES.ASSESSMENT_CREATE);
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
              <Link href={ROUTES.ASSESSMENT_QN_BANK}>
                <Button variant="outline">Question Bank</Button>
              </Link>
              <Link href={ROUTES.ASSESSMENT_CREATE}>
                <Button>Create Assessment</Button>
              </Link>
            </div>
          </TabsList>
          <Header>
            <div className="flex gap-5">
              <SearchBar />
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
                  assessments.map((assessment: AssessmentStateType, index) => (
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
                  assessments.map((assessment: AssessmentStateType, index) => (
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
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart accessibilityLayer data={chartData}>
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="archives">
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
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

export default DashboardPage;
