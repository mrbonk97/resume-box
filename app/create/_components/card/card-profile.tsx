import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forwardRef } from "react";

export const CardProfile = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Card className="relative p-5 card" id="profile" ref={ref}>
      <CardHeader>
        <CardTitle>기본정보</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-10 items-center gap-2">
        <Label htmlFor="name" className="col-span-1 text-right">
          이름
        </Label>
        <Input placeholder="이름" id="name" className="col-span-9" />
        <Label htmlFor="email" className="col-span-1 text-right">
          이메일
        </Label>
        <Input
          placeholder="resume@naver.com"
          id="email"
          className="col-span-9"
        />
        <Label htmlFor="mobile-no" className="col-span-1 text-right">
          전화번호
        </Label>
        <Input
          placeholder="010-0000-0000"
          id="mobile-no"
          className="col-span-9"
        />
      </CardContent>
    </Card>
  );
});
