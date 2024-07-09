import { Logo } from "@/components/logo";
import { UserAvater } from "@/components/user-avatar";

export const Topnav = () => {
  return (
    <header className="fixed top-0 w-full h-20 bg-secondary border-b z-10 flex items-center justify-between px-14">
      <Logo />
      <UserAvater />
    </header>
  );
};
