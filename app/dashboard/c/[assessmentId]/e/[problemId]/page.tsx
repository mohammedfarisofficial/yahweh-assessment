"use client";
import teacherRoute from "@/app/auth/teacherRoute";
import { useParams } from "next/navigation";

const EditProblem = () => {
   const { assessmentId } = useParams();
   return <div>EditProblem : {assessmentId} </div>;
};

export default teacherRoute(EditProblem);
