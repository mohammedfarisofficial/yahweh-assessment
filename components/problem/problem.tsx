import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
    PROBLEM_ACCESS_TYPE_CAN_ANSWER,
    PROBLEM_ACCESS_TYPE_MODERATOR
} from "@/app/constants/problem-type";
import Question from "@/components/problem/question";
import Answer from "@/components/problem/answer";

interface PropsType {
  // children: React.ReactNode;
  questionAccesstype: string;
  questiontype: string;
}
const Problem = ({  questiontype, questionAccesstype }: PropsType) => {
  return (
    <Card className="w-full p-5">
      <Question/>
      <Answer questiontype={questiontype} questionAccesstype={questionAccesstype}/>
      {/* {children} */}
      {questionAccesstype === PROBLEM_ACCESS_TYPE_MODERATOR && (
        <div className="w-full flex justify-end gap-5 py-5">
          <Button variant="destructive">Delete</Button>
          <Button variant="secondary">Edit</Button>
        </div>
      )}
      {questionAccesstype === PROBLEM_ACCESS_TYPE_CAN_ANSWER && (
        <div className="w-full flex justify-end gap-5 py-5">
          <Button >Save</Button>
        </div>
      )}
    </Card>
  );
};

export default Problem;

// multi - 5 in 1
// true or false
// long
// short
