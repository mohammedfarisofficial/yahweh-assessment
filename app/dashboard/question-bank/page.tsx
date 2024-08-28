import Link from "next/link";
import {
  PROBLEM_ACCESS_TYPE_CAN_ANSWER,
  PROBLEM_ACCESS_TYPE_MODERATOR,
  PROBLEM_TYPE_LONG,
  PROBLEM_TYPE_MULTIPLE,
  PROBLEM_TYPE_SHORT,
  PROBLEM_TYPE_TRUE_OR_FALSE,
} from "@/app/constants/problem-type";
import * as ROUTES from "@/app/constants/routes";

import Header from "@/components/header";
import Problem from "@/components/problem/problem";
import { Button } from "@/components/ui/button";

const QuestionBank = () => {
  return (
    <div className="flex flex-col gap-5">
       <Header>
        <div>
          <h1>Question Bank</h1>
          <p className="text-gray-400 text-sm">list of questions</p>
        </div>
        <Link href={ROUTES.ASSESSMENT_CREATE}>
          <Button>Create Assessment</Button>
        </Link>
      </Header>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      >
      </Problem>

      <Problem
        questiontype={PROBLEM_TYPE_MULTIPLE}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      >
      </Problem>
      <Problem
        questiontype={PROBLEM_TYPE_TRUE_OR_FALSE}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      >
      </Problem>

      <Problem
        questiontype={PROBLEM_TYPE_LONG}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      >
      </Problem>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      >
      </Problem>

      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      >
      </Problem>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      >
      </Problem>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      >
      </Problem>
    </div>
  );
};

export default QuestionBank;
