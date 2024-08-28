"use client";
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

const AssessmentCreate = () => {
  const { isOpen, setIsOpen, onClose } = useDisclosure(true);
  const assessmentSetupHanlder = () => {
    onClose();
  };
  return (
    <div>
      <Header>
        <div>
          <h1>List of Assessments</h1>
          <p className="text-gray-400 text-sm">Assessment dashboard</p>
        </div>
        <Link href={ROUTES.ASSESSMENT_QN_BANK}>
          <Button>Browse Question Bank</Button>
        </Link>
      </Header>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Assessment Basic Settings</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
            <div>
              <Card className="w-full py-5 pl-5">
                <p className="text-sm text-gray-200">
                  - Instruction about the assessment
                </p>
                <p className="text-sm text-gray-200">
                  - Instruction about the assessment
                </p>
              </Card>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={assessmentSetupHanlder} type="submit">
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AssessmentCreate;

// popup
// - type
// - title
// - instructions

// tab
// - questions
// - settings
//  visibility  - private , all - specific group
//  access  - private , all - specific group
//
