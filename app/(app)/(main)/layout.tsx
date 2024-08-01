"use client";
import { Sidenav } from "@/components/nav/side-nav";
import { Topnav } from "./_components/top-nav";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.isLoggedIn) {
    router.push("/sign-in");
    return null;
  }

  return (
    <>
      <Topnav />
      <Sidenav />
      <main className="pl-28 pr-5 pt-24 min-h-full">{children}</main>
    </>
  );
};

export default DashBoardLayout;
