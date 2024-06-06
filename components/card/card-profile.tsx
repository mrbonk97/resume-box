import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { forwardRef } from "react";

export const CardProfile = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Card className="relative p-5" id="profile" ref={ref}>
      <CardHeader>
        <CardTitle>기본정보</CardTitle>
      </CardHeader>
      <CardContent className="mt-5">
        <div className="w-96">
          <Label htmlFor="name">이름</Label>
          <Input
            placeholder="이름"
            id="name"
            className="mt-1 mb-3 focus-visible:ring-transparent"
          />
          <Label htmlFor="email">이메일</Label>
          <Input
            placeholder="resume@naver.com"
            id="email"
            className="mt-1 mb-3 focus-visible:ring-transparent"
          />
          <Label htmlFor="mobile-no">전화번호</Label>
          <Input
            placeholder="010-0000-0000"
            id="mobile-no"
            className="focus-visible:ring-transparent"
          />
        </div>
      </CardContent>
    </Card>
  );
});
