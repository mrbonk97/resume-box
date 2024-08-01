import * as z from "zod";

export const signUpForm = z.object({
  username: z.string(),
  password: z.string(),
  realName: z.string(),
});

export const signInForm = z.object({
  username: z.string(),
  password: z.string(),
});
