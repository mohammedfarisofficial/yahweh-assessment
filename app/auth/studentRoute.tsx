"use client";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { ROLE_STUDENT } from "../constants/role";

const studentRoute = (Component: React.FC<any>) => {
   return function WithAuth(props: any) {
      const { authUser, isAuthenticated } = useSelector((state: RootState) => state.authState);

      useLayoutEffect(() => {
         if (!isAuthenticated) {
            redirect("/login");
            return;
         }
         if (isAuthenticated && authUser.role != ROLE_STUDENT) {
            redirect("/dashboard");
            return;
         }
      }, [authUser, isAuthenticated]);
      return <Component {...props} />;
   };
};

export default studentRoute;
