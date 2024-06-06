"use client";
import { Sidenav } from "@/components/nav/side-nav";
import { Input } from "@/components/ui/input";
import { CardWork } from "@/components/card/card-work";
import { createRef, useEffect, useRef } from "react";
import { SaveNavbar } from "@/components/nav/floating-nav";
import { CardProfile } from "@/components/card/card-profile";

const CreatePage = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const certieRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const handleScroll = (type: string) => {
    if (type == "PROFILE") profileRef.current?.scrollIntoView();
    if (type == "WORK") workRef.current?.scrollIntoView();
    if (type == "EDUCATION") eduRef.current?.scrollIntoView();
    if (type == "CERTIFICATE") certieRef.current?.scrollIntoView();
    if (type == "LANGUAGE") langRef.current?.scrollIntoView();
    if (type == "LINK") linkRef.current?.scrollIntoView();
    if (type == "COVER") coverRef.current?.scrollIntoView();
  };

  return (
    <main className="min-h-full w-full bg-slate-200">
      <Sidenav handleScroll={handleScroll} />
      <div className="pl-[400px] pt-20 pr-10 w-full space-y-10">
        <CardProfile ref={profileRef} />
        <CardWork ref={workRef} />
        <div className="h-[600px] bg-rose-100"></div>
      </div>
      <SaveNavbar />
    </main>
  );
};

export default CreatePage;
