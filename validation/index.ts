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

const awardSchema = z.object({
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

const coverSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export const resumeSchema = z.object({
  id: z.number(),
  profile: profileSchema,
  isWorkOn: z.boolean(),
  isEduOn: z.boolean(),
  isAwardOn: z.boolean(),
  isCertiOn: z.boolean(),
  isLanguageOn: z.boolean(),
  isLinkOn: z.boolean(),
  isCoverOn: z.boolean(),
  work: z.array(workSchema).optional(),
  edu: z.array(eduSchema).optional(),
  award: z.array(awardSchema).optional(),
  certi: z.array(certiSchema).optional(),
  language: z.array(languageSchema).optional(),
  link: z.array(linkSchema).optional(),
  cover: coverSchema.optional(),
});

export interface CardDetailProps {
  ref: React.LegacyRef<HTMLDivElement> | undefined;
  isOn: boolean;
  handleOn: () => void;
  control: Control<
    {
      id: number;
      isWorkOn: boolean;
      isEduOn: boolean;
      isAwardOn: boolean;
      isCertiOn: boolean;
      isLanguageOn: boolean;
      isLinkOn: boolean;
      isCoverOn: boolean;
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
      cover?:
        | {
            title: string;
            body: string;
          }
        | undefined;
    },
    any
  >;
}

export interface Controls {
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
      isWorkOn: boolean;
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
      cover?:
        | {
            title: string;
            body: string;
          }
        | undefined;
    },
    any
  >;
}

export type isOnType =
  | "isWorkOn"
  | "isEduOn"
  | "isAwardOn"
  | "isCertiOn"
  | "isLanguageOn"
  | "isLinkOn"
  | "isCoverOn";
