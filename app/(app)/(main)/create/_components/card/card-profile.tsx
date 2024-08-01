"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardDetailProps } from "@/validation";

export const CardProfile = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control, isOn, handleOn }, ref) => {
    return (
      <Card className="relative p-5 card" id="profile" ref={ref}>
        <CardHeader>
          <CardTitle>기본정보</CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            control={control}
            name="profile.username"
            render={({ field }) => (
              <FormItem className="grid grid-cols-10 items-center gap-2">
                <FormLabel className="col-span-1 text-right">이름</FormLabel>
                <FormControl>
                  <Input
                    placeholder="김이력"
                    className="col-span-9"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="profile.email"
            render={({ field }) => (
              <FormItem className="grid grid-cols-10 items-center gap-2">
                <FormLabel className="col-span-1 text-right">이메일</FormLabel>
                <FormControl>
                  <Input
                    placeholder="resume@naver.com"
                    className="col-span-9"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="profile.mobile_no"
            render={({ field }) => (
              <FormItem className="grid grid-cols-10 items-center gap-2">
                <FormLabel className="col-span-1 text-right">연락처</FormLabel>
                <FormControl>
                  <Input
                    placeholder="010-0000-0000"
                    className="col-span-9"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    );
  }
);

CardProfile.displayName = "CardProfile";
