"use client";
import { signInForm } from "@/lib/form/form";
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
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Logo } from "@/components/logo";
import Link from "next/link";

const SignInPage = () => {
  const auth = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof signInForm>>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (e: z.infer<typeof signInForm>) => {
    await auth.signIn(e.username, e.password);
  };

  useEffect(() => {
    if (auth.isLoggedIn) router.push("/dashboard");
  }, [auth.isLoggedIn]);

  return (
    <main className="h-full flex justify-center pt-20">
      <article className="sm:min-w-[400px]">
        <div className="flex justify-center mb-10">
          <Logo width={100} height={100} />
        </div>
        <hgroup className="px-10">
          <h1 className="text-3xl font-bold tracking-wider">로그인</h1>
          <h2 className="break-keep">로그인에 대한 문구</h2>
        </hgroup>
        <Form {...form}>
          <form
            className="p-10 sm:px-5 space-y-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="아이디" {...field} className="py-5" />
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
                    <Input placeholder="패스워드" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-5 w-full rounded-sm">
              로그인
            </Button>
            <Button
              onClick={() => {
                auth.test();
                setTimeout(() => router.push("/dashboard"), 300);
              }}
              type="button"
              variant={"secondary"}
              className="mt-5 w-full rounded-sm"
            >
              테스트 로그인
            </Button>
          </form>
        </Form>
        <p className="mt-3 text-sm text-center">
          아직 계정이 없으시다면{" "}
          <Link href="/sign-up">
            <u>회원가입</u>
          </Link>
        </p>
      </article>
    </main>
  );
};

export default SignInPage;
