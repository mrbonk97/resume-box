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
import { CardCover } from "./_components/card/card-cover";
import { Sidenav } from "../_components/side-nav";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { resumeSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Sidenav handleScroll={handleScroll} refs={refs} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="pl-[25rem] 2xl:pl-[600px] pr-5 pt-20 max-w-[1420px] space-y-5">
            <Button type="submit">제출</Button>
            <CardProfile ref={profileRef} control={form.control} />
            <Separator />
            <CardWork ref={workRef} control={form.control} />
            <Separator />
            <CardEducation ref={eduRef} control={form.control} />
            <Separator />
            <CardAward ref={awardRef} control={form.control} />
            <Separator />
            <CardCertificate ref={certieRef} control={form.control} />
            <Separator />
            <CardLanguage ref={langRef} control={form.control} />
            <Separator />
            <CardLink ref={linkRef} control={form.control} />
            <Separator />
            {/* <CardCover ref={coverRef} /> */}
            <div className="h-[800px] w-full" />
          </section>
        </form>
      </Form>
    </>
  );
};

export default CreatePage;
