"use client";
import { useEffect, useRef, useState } from "react";
import { PageProgress } from "@/components/page-progress";
import { Separator } from "@/components/ui/separator";
import { CardProfile } from "./_components/card/card-profile";
import { CardWork } from "./_components/card/card-work";
import { CardEducation } from "./_components/card/card-education";
import { CardCertificate } from "./_components/card/card-certi";
import { CardLanguage } from "./_components/card/card-language";
import { CardLink } from "./_components/card/card-link";
import { CardCover } from "./_components/card/card-cover";
import { Sidenav } from "../_components/side-nav";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { isOnType, resumeSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CardAward } from "./_components/card/card-award";

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

  const form = useForm<z.infer<typeof resumeSchema>>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      isWorkOn: false,
      isEduOn: false,
      isAwardOn: false,
      isCertiOn: false,
      isLanguageOn: false,
      isLinkOn: false,
      isCoverOn: false,
      profile: {
        username: "",
        email: "",
        mobile_no: "",
      },
      work: [
        {
          start_date: "",
          end_date: "",
          company: "",
          department: "",
        },
      ],
      edu: [
        {
          start_date: "",
          end_date: "",
          school: "",
          major: "",
        },
      ],
      award: [
        {
          date: "",
          description: "",
          organization: "",
          title: "",
        },
      ],
      certi: [
        {
          date: "",
          organization: "",
          title: "",
        },
      ],
      language: [
        {
          language: "",
          score: "",
          test: "",
        },
      ],
      link: [
        {
          description: "",
          url: "",
        },
      ],
      cover: {
        title: "",
        body: "",
      },
    },
  });

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
    coverRef,
  ];

  function onSubmit(values: z.infer<typeof resumeSchema>) {
    console.log(values);
    fetch("http://localhost:8080/api/resume", {
      method: "POST",
      body: JSON.stringify(values),
    });
  }

  const handleSectionOn = (type: isOnType) =>
    form.setValue(type, !form.getValues(type));

  return (
    <>
      <PageProgress mainRef={mainRef} />
      <Sidenav handleScroll={handleScroll} refs={refs} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section
            className="pl-[25rem] 2xl:pl-[400px] pr-5 pt-20 max-w-[1420px] space-y-5"
            ref={mainRef}
          >
            <CardProfile
              ref={profileRef}
              control={form.control}
              isOn={false}
              handleOn={() => {}}
            />
            <Separator />
            <CardWork
              ref={workRef}
              control={form.control}
              isOn={form.watch("isWorkOn")}
              handleOn={() => handleSectionOn("isWorkOn")}
            />
            <Separator />
            <CardEducation
              ref={eduRef}
              control={form.control}
              isOn={form.watch("isEduOn")}
              handleOn={() => handleSectionOn("isEduOn")}
            />
            <Separator />
            <CardAward
              ref={awardRef}
              control={form.control}
              isOn={form.watch("isAwardOn")}
              handleOn={() => handleSectionOn("isAwardOn")}
            />
            <Separator />
            <CardCertificate
              ref={certieRef}
              control={form.control}
              isOn={form.watch("isCertiOn")}
              handleOn={() => handleSectionOn("isCertiOn")}
            />
            <Separator />
            <CardLanguage
              ref={langRef}
              control={form.control}
              isOn={form.watch("isLanguageOn")}
              handleOn={() => handleSectionOn("isLanguageOn")}
            />
            <Separator />
            <CardLink
              ref={linkRef}
              control={form.control}
              isOn={form.watch("isLinkOn")}
              handleOn={() => handleSectionOn("isLinkOn")}
            />
            <Separator />
            <CardCover
              ref={coverRef}
              control={form.control}
              isOn={form.watch("isCoverOn")}
              handleOn={() => handleSectionOn("isCoverOn")}
            />
            <div className="h-[800px] w-full" />
          </section>
          <Button type="submit" className="fixed right-10 bottom-10">
            저장
          </Button>
        </form>
      </Form>
    </>
  );
};

export default CreatePage;
