import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yahweh | Assessment",
};
const AssessmentLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-[80px] px-[2rem]">{children}</div>;
};

export default AssessmentLayout;
