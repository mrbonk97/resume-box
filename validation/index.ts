import * as z from "zod";

export const profileSchema = z.object({
  username: z.string(),
  email: z.string(),
  mobile_no: z.string(),
});

export const workSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
  company: z.string(),
  department: z.string(),
});

export const eduSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
  school: z.string(),
  major: z.string(),
});

export const awrdSchema = z.object({
  title: z.string(),
  organization: z.string(),
  date: z.string(),
  description: z.string(),
});

export const certiSchema = z.object({
  title: z.string(),
  organization: z.string(),
  date: z.string(),
});

export const languageSchema = z.object({
  language: z.string(),
  test: z.string(),
  score: z.string(),
});

export const linkSchema = z.object({
  description: z.string(),
  url: z.string(),
});

export const resumeSchema = z.object({
  profile: profileSchema,
  work: z.array(workSchema),
  education: z.array(eduSchema),
  award: z.array(awrdSchema),
  certi: z.array(certiSchema),
  language: z.array(languageSchema),
  link: z.array(linkSchema),
});
