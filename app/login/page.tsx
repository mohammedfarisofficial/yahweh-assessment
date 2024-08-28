"use client";
import { useState } from "react";
// comp
import Header from "@/components/header";
// types
import { User, users } from "@/data";
//constants
import { ROLE_STUDENT, ROLE_TEACHER } from "../constants/role";
import { useRouter } from "next/navigation";
import * as ROUTES from "../constants/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { setAuth } from "../store/reducers/authSlice";
import { useAppDispatch } from "../store/store";

import { useToast } from "@/components/ui/use-toast";

type LoginCredentialsType = {
  email: string;
  password: string;
};
type inputType = { name: string; value: string };
const LoginPage = () => {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentialsType>({
      email: "",
      password: "",
    });

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setLoginCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const loginHandler = (e: any) => {
    e.preventDefault();
    console.log("Login Credentials:", loginCredentials);

    // finding user in dummay data ( Production - search in DB )
    const user = users.find((user) => user.email === loginCredentials.email);

    if (user && user.password === loginCredentials.password) {
      dispatch(setAuth(user));

      // Redirect based on role
      if (user.role === ROLE_TEACHER) {
        router.push(ROUTES.DASHBOARD);
      } else if (user.role === ROLE_STUDENT) {
        router.push(ROUTES.HOME);
      }
      toast({
        title: "Login Successfull",
        description: `Welcome ${user?.name}`,
      });
    } else {
      toast({
        title: "Invalid credentials",
      });
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="w-full h-[100vh] px-20 flex flex-col justify-center items-center">
      <form onSubmit={loginHandler}>
        <Card className="w-[350px] max-w-[90vw]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Welcome back! Please enter your details.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Enter email</Label>
              <Input
                onChange={onChangeHandler}
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={onChangeHandler}
                placeholder="password"
                name="password"
                type="password"
                id="password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="m-2" type="submit">
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default LoginPage;
