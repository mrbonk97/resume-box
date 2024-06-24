"use client";
import { useEffect, useRef, useState } from "react";
import { Topnav } from "@/components/nav/top-nav";
import { PageProgress } from "@/components/page-progress";
import { Separator } from "@/components/ui/separator";
import { CardProfile } from "./_components/card/card-profile";
import { CardWork } from "./_components/card/card-work";
import { CardEducation } from "./_components/card/card-education";
import { CardAward } from "./_components/card/card-award";
import { CardCertificate } from "./_components/card/card-certi";
import { CardLanguage } from "./_components/card/card-language";
import { CardLink } from "./_components/card/card-link";
import { Sidenav } from "./_components/navbar/side-nav";

const CreatePage = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const certieRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const awardRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = (type: string) => {
    switch (type) {
      case "PROFILE":
        profileRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "WORK":
        workRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "EDUCATION":
        eduRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "AWARD":
        awardRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "CERTIFICATE":
        certieRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "LANGUAGE":
        langRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "LINK":
        linkRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "COVER":
        coverRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  const refs = [
    profileRef,
    workRef,
    eduRef,
    awardRef,
    certieRef,
    langRef,
    linkRef,
    // coverRef,
  ];

  return (
    <>
      {/* <PageProgress mainRef={mainRef} /> */}
      <Topnav />
      <main>
        <Sidenav handleScroll={handleScroll} refs={refs} />
        <section className="pl-[25rem] pr-5 pt-20 max-w-[1420px] space-y-5">
          <CardProfile ref={profileRef} />
          <Separator />
          <CardWork ref={workRef} />
          <Separator />
          <CardEducation ref={eduRef} />
          <Separator />
          <CardAward ref={awardRef} />
          <Separator />
          <CardCertificate ref={certieRef} />
          <Separator />
          <CardLanguage ref={langRef} />
          <Separator />
          <CardLink ref={linkRef} />
          <div className="h-[100px] w-full" />
        </section>
      </main>
    </>
  );
};

export default CreatePage;
