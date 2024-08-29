"use client";
import { RootState } from "@/app/store/store";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AssessmentStateType } from "@/data";
import React from "react";
import { useSelector } from "react-redux";

const AssessmentDrafts = () => {
  const { assessments } = useSelector((state: RootState) => state.dataState);
  return (
    <div>
      <Header>
        <Header>
          <div>
            <h1>Drafts</h1>
            <p className="text-gray-400 text-sm">Draft assessment</p>
          </div>
          <div></div>
        </Header>
      </Header>
      <Table>
        <TableCaption>A list of your assessments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Assessment ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Assessment type</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assessments && !!assessments.length ? (
            assessments.map((assessment: AssessmentStateType, index:number) => (
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
                    Publish
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
    </div>
  );
};

export default AssessmentDrafts;
