"use client";
import { MENU } from "@/constants";
import { EditTitleModal } from "@/components/modal/edit-title-modal";
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
    <aside className="fixed top-0 left-20 p-5 pt-28 min-h-[800px] h-full w-96 flex flex-col items-center bg-secondary/50 border-r">
      <div className="h-32 w-32 rounded-full flex2 relative bg-primary text-primary-foreground">
        <span className="font-semibold text-2xl">이력서1</span>
        <div className="absolute bottom-2 right-2">
          <EditTitleModal />
        </div>
      </div>

      <ul className="w-full space-y-5 p-5">
        {MENU.map((item) => (
          <li
            key={item.idx}
            className={`p-2 menu-item rounded-lg hover:bg-rose-100 cursor-pointer text-right ${
              item.idx == focus && "bg-rose-100"
            }`}
            onClick={() => {
              handleScroll(item.action);
              setTimeout(() => setFocus(item.idx), 500);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};
