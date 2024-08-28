import Header from "@/components/header";
import * as ROUTES from "@/app/constants/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Problem from "@/components/problem/problem";
import {
  PROBLEM_ACCESS_TYPE_CAN_ANSWER,
  PROBLEM_ACCESS_TYPE_MODERATOR,
  PROBLEM_TYPE_LONG,
  PROBLEM_TYPE_MULTIPLE,
  PROBLEM_TYPE_SHORT,
  PROBLEM_TYPE_TRUE_OR_FALSE,
} from "@/app/constants/problem-type";

const Assigment = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header>
        <div>
          <h1>Assignment #987654jkafqw34lj32jkljk</h1>
          <p className="text-gray-400 text-sm">List of Questions</p>
        </div>
        <div className="flex gap-4">
          <Link href={ROUTES.ASSESSMENT_CREATE}>
            <Button variant="secondary">Clear</Button>
          </Link>
          <Link href={ROUTES.ASSESSMENT_CREATE}>
            <Button>Submit Assessment</Button>
          </Link>
        </div>
      </Header>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      ></Problem>

      <Problem
        questiontype={PROBLEM_TYPE_MULTIPLE}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      ></Problem>
      <Problem
        questiontype={PROBLEM_TYPE_TRUE_OR_FALSE}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      ></Problem>

      <Problem
        questiontype={PROBLEM_TYPE_LONG}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      ></Problem>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      ></Problem>

      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      ></Problem>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_MODERATOR}
      ></Problem>
      <Problem
        questiontype={PROBLEM_TYPE_SHORT}
        questionAccesstype={PROBLEM_ACCESS_TYPE_CAN_ANSWER}
      ></Problem>
    </div>
  );
};

export default Assigment;
