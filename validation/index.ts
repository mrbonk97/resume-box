import { Control } from "react-hook-form";
import * as z from "zod";

const profileSchema = z.object({
  username: z.string(),
  email: z.string(),
  mobile_no: z.string(),
});

const workSchema = z.object({
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  company: z.string().optional(),
  department: z.string().optional(),
});

const eduSchema = z.object({
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  school: z.string().optional(),
  major: z.string().optional(),
});

const awrdSchema = z.object({
  title: z.string().optional(),
  organization: z.string().optional(),
  date: z.string().optional(),
  description: z.string().optional(),
});

const certiSchema = z.object({
  title: z.string().optional(),
  organization: z.string().optional(),
  date: z.string().optional(),
});

const languageSchema = z.object({
  language: z.string().optional(),
  test: z.string().optional(),
  score: z.string().optional(),
});

const linkSchema = z.object({
  description: z.string().optional(),
  url: z.string().optional(),
});

const paragraph = z.object({
  subtitle: z.string().optional(),
  body: z.string().optional(),
});

const coverSchema = z.object({
  title: z.string().optional(),
  paragraphs: z.array(paragraph).optional(),
});

export const resumeSchema = z.object({
  profile: profileSchema,
  work: z.array(workSchema).optional(),
  edu: z.array(eduSchema).optional(),
  award: z.array(awrdSchema).optional(),
  certi: z.array(certiSchema).optional(),
  language: z.array(languageSchema).optional(),
  link: z.array(linkSchema).optional(),
  cover: z.array(coverSchema).optional(),
});

export interface CardDetailProps {
  ref: React.LegacyRef<HTMLDivElement> | undefined;
  control: Control<
    {
      profile: {
        email: string;
        username: string;
        mobile_no: string;
      };
      work?:
        | {
            start_date?: string | undefined;
            end_date?: string | undefined;
            company?: string | undefined;
            department?: string | undefined;
          }[]
        | undefined;
      edu?:
        | {
            start_date?: string | undefined;
            end_date?: string | undefined;
            school?: string | undefined;
            major?: string | undefined;
          }[]
        | undefined;
      award?:
        | {
            title?: string | undefined;
            organization?: string | undefined;
            date?: string | undefined;
            description?: string | undefined;
          }[]
        | undefined;
      certi?:
        | {
            title?: string | undefined;
            organization?: string | undefined;
            date?: string | undefined;
          }[]
        | undefined;
      language?:
        | {
            language?: string | undefined;
            test?: string | undefined;
            score?: string | undefined;
          }[]
        | undefined;
      link?:
        | {
            description?: string | undefined;
            url?: string | undefined;
          }[]
        | undefined;
    },
    any
  >;
}

export interface ResumeControlType {
  control: Control<
    {
      profile: {
        email: string;
        username: string;
        mobile_no: string;
      };
      work?:
        | {
            start_date?: string | undefined;
            end_date?: string | undefined;
            company?: string | undefined;
            department?: string | undefined;
          }[]
        | undefined;
      edu?:
        | {
            start_date?: string | undefined;
            end_date?: string | undefined;
            school?: string | undefined;
            major?: string | undefined;
          }[]
        | undefined;
      award?:
        | {
            title?: string | undefined;
            organization?: string | undefined;
            date?: string | undefined;
            description?: string | undefined;
          }[]
        | undefined;
      certi?:
        | {
            title?: string | undefined;
            organization?: string | undefined;
            date?: string | undefined;
          }[]
        | undefined;
      language?:
        | {
            language?: string | undefined;
            test?: string | undefined;
            score?: string | undefined;
          }[]
        | undefined;
      link?:
        | {
            description?: string | undefined;
            url?: string | undefined;
          }[]
        | undefined;
    },
    any
  >;
}
