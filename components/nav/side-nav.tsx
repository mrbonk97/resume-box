import Link from "next/link";
import { Button } from "../ui/button";
import { RefObject } from "react";
import { Pencil } from "lucide-react";
import { EditTitleModal } from "../modal/edit-title-modal";
import { ModeToggle } from "../mode-toggle";

interface SidenavProps {
  handleScroll: (type: string) => void;
}

export const Sidenav: React.FC<SidenavProps> = ({ handleScroll }) => {
  return (
    <aside className="fixed h-full w-96 bg-secondary flex items-center flex-col p-5 pt-10 rounded">
      <div className="h-32 w-32 rounded-full flex2 relative bg-primary text-primary-foreground">
        <span className="font-semibold text-2xl">이력서1</span>
        <div className="absolute bottom-2 right-2">
          <EditTitleModal />
        </div>
      </div>

      <ul className="w-full space-y-5 p-5 mt-10">
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("PROFILE")}
        >
          기본정보
        </li>
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("WORK")}
        >
          경력
        </li>
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("EDUCATION")}
        >
          학력
        </li>
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("CERTIFICATE")}
        >
          수상 및 경력
        </li>
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("LANGUAGE")}
        >
          외국어
        </li>
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("LINK")}
        >
          링크
        </li>
        <li
          className="menu-item hover:bg-primary-foreground"
          onClick={() => handleScroll("COVER")}
        >
          자기소개서
        </li>
      </ul>

      <ModeToggle />
    </aside>
  );
};
