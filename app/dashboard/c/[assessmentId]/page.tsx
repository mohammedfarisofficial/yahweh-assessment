"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
import { useRouter } from "next/navigation";

const AssessmentCreate = () => {
   const { isOpen, setIsOpen, onClose } = useDisclosure(true);

   const router = useRouter();
   const assessmentSetupHanlder = () => {
      onClose();
   };

   const editProblemHanlder = () => {
      router.push(`${ROUTES.ASSESSMENT_CREATE}/123/${ROUTES.ASSESSMENT_EDIT_PREFIX}/64f2eaf1b39b540001234579`);
   };
   return (
      <div>
         <Header>
            <div>
               <h1>Assessment Settings</h1>
               <p className="text-gray-400 text-sm">ID : 64f2eaf1b39b540001234579 ( change prefix in url and add ID to params)</p>
            </div>
         </Header>
         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> */}
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
                     <Input placeholder="Enter title..." />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                     <Label htmlFor="username" className="text-right">
                        Assessment type
                     </Label>
                     <Select>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Select assessment type" />
                        </SelectTrigger>
                        <SelectContent>
                           {assessmentType &&
                              !!assessmentType.length &&
                              assessmentType.map((assessmentType, index) => (
                                 <SelectItem key={index} value="light">
                                    {assessmentType}
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
                        <Link href={`${ROUTES.ASSESSMENT_CREATE}/123/${ROUTES.ASSESSMENT_CREATE_PROBLEM_PREFIX}/64f2eaf1b39b540001234579`}>
                           <Button>Create Question</Button>
                        </Link>
                     </div>
                  </Container>
                  <Problem
                     onClickEdit={editProblemHanlder}
                     questiontype={PROBLEM_TYPE_SHORT}
                     questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
                  ></Problem>
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
                           <p className="text-sm text-gray-400">Set who can access your accessment</p>
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
                           <p className="text-sm text-gray-400">Set how many times students can attempt the assessment</p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Feedback Timing</p>
                           <p className="text-sm text-gray-400">Set when the student should receive the feedback</p>
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
                           <p className="text-sm text-gray-400">Set when the student can see the grades of the assessment</p>
                        </div>
                        <Button>Select</Button>
                     </Container>
                     <Separator />
                     <Container>
                        <div>
                           <p>Notification Settings</p>
                           <p className="text-sm text-gray-400">By turning ON you can receive notifications</p>
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

export default AssessmentCreate;

// qn
// type
// type - answer Setting
// level - easy - medium - hard
// subject -
