"use client";
import { RefObject, useRef } from "react";

interface PageProgressProps {
  mainRef: RefObject<HTMLDivElement>;
}

export const PageProgress: React.FC<PageProgressProps> = ({ mainRef }) => {
  const ref = useRef<HTMLProgressElement>(null);

  window.addEventListener("scroll", () => {
    if (ref.current == null) return;
    if (mainRef.current == null) return;

    ref.current!.value = -mainRef.current!.getBoundingClientRect().top;
    ref.current!.max =
      mainRef.current!.getBoundingClientRect().height - window.innerHeight;
  });

  return (
    <progress
      className="fixed w-full top-0 z-50 h-3"
      value={0}
      max={100}
      ref={ref}
    ></progress>
  );
};
