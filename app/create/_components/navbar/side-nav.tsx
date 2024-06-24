"use client";
import { MENU } from "@/constants";
import { EditTitleModal } from "@/components/modal/edit-title-modal";
import { ModeToggle } from "@/components/mode-toggle";
import { RefObject, useState } from "react";

interface SidenavProps {
  handleScroll: (type: string) => void;
  refs: RefObject<HTMLDivElement>[];
}

// TODO: 참고하여 개선하기
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

export const Sidenav: React.FC<SidenavProps> = ({ handleScroll, refs }) => {
  const [focus, setFocus] = useState(0);

  document.addEventListener("scroll", () => {
    if (refs[0].current == null) return;
    if (refs[1].current == null) return;
    if (refs[2].current == null) return;
    if (refs[3].current == null) return;
    if (refs[4].current == null) return;
    if (refs[5].current == null) return;
    if (refs[6].current == null) return;
    if (window == null) return;

    for (let i = 0; i < refs.length; i++) {
      if (
        refs[i].current!.getBoundingClientRect().top > 0 &&
        refs[i].current!.getBoundingClientRect().top < 200
      ) {
        setFocus(i);
        break;
      }
    }
  });

  return (
    <aside className="fixed left-0 h-full w-96 bg-secondary flex items-center flex-col p-5 pt-20 border-r z-10">
      <div className="h-32 w-32 rounded-full flex2 relative bg-primary text-primary-foreground">
        <span className="font-semibold text-2xl">이력서1</span>
        <div className="absolute bottom-2 right-2">
          <EditTitleModal />
        </div>
      </div>

      <ul className="w-full space-y-5 p-5 mt-5">
        {MENU.map((item) => (
          <li
            key={item.idx}
            className={`menu-item hover:bg-primary-foreground text-right ${
              item.idx == focus && "bg-rose-100"
            }`}
            onClick={() => {
              handleScroll(item.action);
              setFocus(item.idx);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <ModeToggle />
    </aside>
  );
};
