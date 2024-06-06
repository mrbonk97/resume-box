import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(2, { message: "최소 2자 이상 입력해 주세요" })
    .max(20, { message: "최대 20자까지 입력이 가능합니다" }),
  password: z
    .string()
    .min(2, { message: "최소 2자 이상 입력해 주세요" })
    .max(20, { message: "최대 20자까지 입력이 가능합니다" }),
});

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: "최소 2자 이상 입력해 주세요" })
    .max(20, { message: "최대 20자까지 입력이 가능합니다" }),
  password: z
    .string()
    .min(2, { message: "최소 2자 이상 입력해 주세요" })
    .max(20, { message: "최대 20자까지 입력이 가능합니다" }),
  nickname: z
    .string()
    .min(2, { message: "최소 2자 이상 입력해 주세요" })
    .max(20, { message: "최대 20자까지 입력이 가능합니다" }),
});
