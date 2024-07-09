import { Sidenav } from "@/components/nav/side-nav";
import { Topnav } from "./_components/top-nav";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <>
      <Topnav />
      <Sidenav />
      <main className="pl-28 pr-5 pt-24 min-h-full">{children}</main>
    </>
  );
};

export default DashBoardLayout;
