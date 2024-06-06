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
import { MinusCircle, PlusSquare } from "lucide-react";
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
          className="absolute top-5 right-5"
          onCheckedChange={(e) => setIsOn(e)}
          checked={isOn}
        />
      </CardHeader>
      {isOn && (
        <>
          <CardContent className="mt-5 space-y-5">
            {work.map((item, idx) => (
              <article className="flex2 gap-10 p-10 rounded" key={idx}>
                <div className="p-10">
                  <div className="flex gap-5 justify-between">
                    <div></div>
                  </div>
                  <div>
                    <Input />
                    <Checkbox id="isWorking" />
                    <label htmlFor="isWorking">재직 중</label>
                  </div>
                  <div>
                    <Label>회사명</Label>
                    <Input />
                  </div>
                  <div>
                    <Label>부서</Label>
                    <Input />
                  </div>
                </div>
                <Button variant={"ghost"} onClick={() => handleDelete(idx)}>
                  <MinusCircle className="text-blue-500" size={36} />
                </Button>
              </article>
            ))}
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
