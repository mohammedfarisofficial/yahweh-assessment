"use client";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components//ui/sheet";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/app/store/store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import * as ROUTES from "../app/constants/routes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { setLogout } from "@/app/store/reducers/authSlice";

const Navbar = () => {
  const { authUser, isAuthenticated } = useSelector(
    (state: RootState) => state.authState
  );

  const { setTheme } = useTheme();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("authUser", authUser);
  }, [authUser]);

  const logoutHandler = () => {
    console.log("trigger");
    dispatch(setLogout({}));
  };
  return (
    <div className="flex px-[2rem] items-center fixed  justify-between h-[80px] w-full z-99 bg-background/50 backdrop-blur-md">
      <Link href="/">
        <h2 className="pl-2">Assessment Management</h2>
      </Link>
      <div className="flex gap-8 items-center">
        {isAuthenticated && <h3>{authUser?.name}</h3>}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">shadcn</p>
                <p className="text-xs leading-none text-muted-foreground">
                  m@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logoutHandler}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* {isAuthenticated ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <Button onClick={() => dispatch(setLogout())}>Sign Out</Button>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/68058442?v=4" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
          </>
        ) : (
          <>
            <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
            <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
          </>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
