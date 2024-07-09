import * as z from "zod";

export const signUpForm = z.object({
  email: z.string(),
  password: z.string(),
  username: z.string(),
});

export const signInForm = z.object({
  email: z.string(),
  password: z.string(),
});
