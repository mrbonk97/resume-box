"use client";
import { Sidenav } from "@/components/nav/side-nav";
import { CardWork } from "@/components/card/card-work";
import { createRef, useEffect, useRef, useState } from "react";
import { SaveNavbar } from "@/components/nav/floating-nav";
import { CardProfile } from "@/components/card/card-profile";
import { CardLink } from "@/components/card/card-link";
import { CardLanguage } from "@/components/card/card-language";
import { CardCertificate } from "@/components/card/card-certi";
import { CardEducation } from "@/components/card/card-education";
import { Topnav } from "@/components/nav/top-nav";
import { PageProgress } from "@/components/page-progress";

const CreatePage = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const certieRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = (type: string) => {
    if (type == "PROFILE")
      profileRef.current?.scrollIntoView({ behavior: "smooth" });
    if (type == "WORK") workRef.current?.scrollIntoView({ behavior: "smooth" });
    if (type == "EDUCATION")
      eduRef.current?.scrollIntoView({ behavior: "smooth" });
    if (type == "CERTIFICATE")
      certieRef.current?.scrollIntoView({ behavior: "smooth" });
    if (type == "LANGUAGE")
      langRef.current?.scrollIntoView({ behavior: "smooth" });
    if (type == "LINK") linkRef.current?.scrollIntoView({ behavior: "smooth" });
    if (type == "COVER")
      coverRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      <PageProgress mainRef={mainRef} />
      <Topnav />
      <main className="min-h-full w-full bg-slate-200" ref={mainRef}>
        <Sidenav handleScroll={handleScroll} />
        <div className="pl-[400px] pt-20 pr-10 w-full space-y-10">
          <CardProfile ref={profileRef} />
          <CardWork ref={workRef} />
          <CardEducation ref={eduRef} />
          <CardCertificate ref={certieRef} />
          <CardLanguage ref={langRef} />
          <CardLink ref={linkRef} />
          <div className="h-[600px] w-full"></div>
          <div className="h-[600px] w-full" />
        </div>
        <SaveNavbar />
      </main>
    </>
  );
};

export default CreatePage;
