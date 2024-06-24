import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Topnav = () => {
  return (
    <header className="fixed w-full h-14 flex justify-between gap-5 px-32 items-center border-b z-20 bg-secondary shadow-sm">
      <Button asChild variant={"ghost"}>
        <Link href={"/board"}>
          <Logo width={50} height={50} />
        </Link>
      </Button>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="hover:bg-white duration-200 rounded-full p-1">
          <CircleUserRound className="text-blue-500" size={36} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>김현석</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/list"}>목록</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/logout"}>로그아웃</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

{
}
