import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const Topnav = () => {
  return (
    <header>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="fixed z-10 top-5 right-5 hover:bg-white duration-200 rounded-full p-1">
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
