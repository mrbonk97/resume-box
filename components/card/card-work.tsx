"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { MinusCircle, PlusSquare, X } from "lucide-react";
import { useState } from "react";
import { workType } from "@/types";
import { forwardRef } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import { InputYear } from "../input-year";

export const CardWork = forwardRef<HTMLDivElement>((props, ref) => {
  const [work, setWork] = useState<workType[]>([
    {
      startYear: "",
      startMonth: "",
      endYear: "",
      endMonth: "",
      department: "",
      isWorking: false,
      name: "",
    },
  ]);
  const [isOn, setIsOn] = useState(false);

  const handleAdd = () => {
    setWork([
      ...work,
      {
        startYear: "",
        startMonth: "",
        endYear: "",
        endMonth: "",
        department: "",
        isWorking: false,
        name: "",
      },
    ]);
  };

  const handleDelete = (idx: number) => {
    const _work: workType[] = [];
    work.map((item, idx2) => {
      if (idx != idx2) _work.push(item);
    });
    setWork(_work);
  };

  return (
    <Card className="relative p-5" ref={ref}>
      <CardHeader>
        <CardTitle>경력</CardTitle>
        <Switch
          className="absolute top-5 right-5 "
          onCheckedChange={(e) => setIsOn(e)}
          checked={isOn}
        />
      </CardHeader>
      {isOn && (
        <>
          <CardContent className="mt-5 space-y-5">
            <ul>
              {work.map((item, idx) => (
                <li key={idx}>
                  <Label>회사</Label>
                  <Input placeholder="회사명을 입력해주세요" />
                  <div className="flex mt-2 gap-5">
                    <Input placeholder="부서" className="w-40" />
                    <Input placeholder="직급" className="w-40" />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Button
              variant={"ghost"}
              className="w-full flex-2 p-7"
              onClick={handleAdd}
            >
              <PlusSquare className="text-blue-500" size={48} />
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
});

{
  /* <li className="bg-slate-50 rounded relative p-10" key={idx}>
  <div className="flex gap-5">
    <InputYear title="시작일" />
    <span className="flex items-end">-</span>
    <InputYear title="종료일" />
  </div>
  <div className="mt-5">
    <Checkbox id="stillWorking" />
    <label htmlFor="stillWorking" className="ml-2">
      재직중
    </label>
  </div>

  <Button
    className="absolute top-3 right-3 p-0 h-4 w-4 flex2"
    variant={"ghost"}
    onClick={() => {}}
  >
    <X size={16} className="text-primary" />
  </Button>
</li>; */
}
