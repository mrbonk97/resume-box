"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInSchema, signUpSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SiginInPage = () => {
  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      nickname: "",
    },
  });

  const handleSignIn = (values: z.infer<typeof signInSchema>) => {};

  return (
    <main className="h-full w-full radical-bg flex2">
      <Tabs defaultValue="sign-in" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">로그인</TabsTrigger>
          <TabsTrigger value="sign-up">회원가입</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card className="p-5">
            <CardHeader className="px-0 py-5">
              <CardTitle>로그인</CardTitle>
              <CardDescription>
                로그인하여 기존 이력서를 조회하실 수 있습니다.
              </CardDescription>
            </CardHeader>
            <Form {...signInForm}>
              <form
                onSubmit={signInForm.handleSubmit(handleSignIn)}
                className="space-y-4"
              >
                <FormField
                  control={signInForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>아이디</FormLabel>
                      <FormControl>
                        <Input placeholder="아이디를 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>패스워드</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="비밀번호를 입력해주세요"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="p-0">
                  <Button className="w-full py-6">로그인</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card className="p-5">
            <CardHeader className="px-0 py-5">
              <CardTitle>회원가입</CardTitle>
              <CardDescription>
                간단한 회원가입으로 무료로 이용해보세요
              </CardDescription>
            </CardHeader>
            <Form {...signUpForm}>
              <form
                onSubmit={signUpForm.handleSubmit(handleSignIn)}
                className="space-y-4"
              >
                <FormField
                  control={signUpForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>아이디</FormLabel>
                      <FormControl>
                        <Input placeholder="아이디를 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signUpForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>패스워드</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="비밀번호를 입력해주세요"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signUpForm.control}
                  name="nickname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="p-0">
                  <Button className="w-full py-6">회원가입</Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default SiginInPage;
