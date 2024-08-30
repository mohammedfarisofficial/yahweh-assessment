import { Metadata } from "next";
import teacherRoute from "@/app/auth/teacherRoute";

export const metadata: Metadata = {
   title: "Yahweh | Dashboard",
};
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return <div className="pt-[80px] px-[2rem]">{children}</div>;
};

export default DashboardLayout;
