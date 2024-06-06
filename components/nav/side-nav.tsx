import Link from "next/link";
import { Button } from "../ui/button";
import { RefObject } from "react";

interface SidenavProps {
  handleScroll: (type: string) => void;
}

export const Sidenav: React.FC<SidenavProps> = ({ handleScroll }) => {
  return (
    <aside className="fixed h-full w-96 bg-white flex items-center flex-col p-5 pt-10 rounded">
      <Link href={"/list"}>
        <Button className="h-32 w-32 rounded-full flex2">
          <span className="font-semibold text-3xl">김현석</span>
        </Button>
      </Link>
      <ul className="w-full space-y-5 p-5 mt-10">
        <li
          className="menu-item hover:bg-slate-200"
          onClick={() => handleScroll("PROFILE")}
        >
          기본정보
        </li>
        <li
          className="menu-item hover:bg-slate-200"
          onClick={() => handleScroll("WORK")}
        >
          경력
        </li>
        <li className="menu-item hover:bg-slate-200">학력</li>
        <li className="menu-item hover:bg-slate-200">수상 및 경력</li>
        <li className="menu-item hover:bg-slate-200">외국어</li>
        <li className="menu-item hover:bg-slate-200">링크</li>
        <li className="menu-item hover:bg-slate-200">자기소개서</li>
      </ul>
    </aside>
  );
};
