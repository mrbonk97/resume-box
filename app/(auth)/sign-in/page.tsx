"use client";
import { signInForm, signUpForm } from "@/lib/form/form";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";

const SignInPage = () => {
  const form = useForm<z.infer<typeof signInForm>>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (e: z.infer<typeof signInForm>) => {
    console.log(e);
  };

  return (
    <main className="h-full flex">
      <section className="h-full w-full sm:w-1/2 flex justify-center pt-16 sm:pt-40">
        <article>
          <div className="flex justify-center mb-10">
            <Logo width={100} height={100} />
          </div>
          <hgroup className="px-10">
            <h1 className="text-3xl font-bold tracking-wider">로그인 하세요</h1>
            <h2 className="break-keep">
              간단한 가입 절차만 거치면 평생 무료로 사용하실 수 있습니다.
            </h2>
          </hgroup>
          <Form {...form}>
            <form
              className="mt-10 sm:mt-20 px-10 sm:px-5 space-y-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="이메일" {...field} className="py-5" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="패스워드"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit" className="mt-5 w-full rounded-sm">
                  로그인
                </Button>
              </div>
            </form>
          </Form>
          <p className="mt-3 text-sm text-center">
            아직 계정이 없으시다면{" "}
            <Link href="/sign-up">
              <u>회원가입</u>
            </Link>
          </p>
        </article>
      </section>
      <Image
        src={"/images/sign-up-bg.jpg"}
        alt="background"
        width={600}
        height={600}
        className="hidden sm:block h-full w-1/2 object-contain bg-[#F1EDE9]"
      />
    </main>
  );
};

export default SignInPage;
