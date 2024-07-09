"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { forwardRef, useState } from "react";
import { PlusSquare } from "lucide-react";
import { ResumeControlType } from "@/validation";

interface CardProps extends ResumeControlType {
  title: string;
  add: () => void;
  children: React.ReactNode;
}

export const ResumeCard = forwardRef<HTMLDivElement, CardProps>(
  ({ title, add, children }, ref) => {
    const [isOn, setIsOn] = useState(false);

    return (
      <Card className="relative p-5 card" ref={ref}>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Switch onCheckedChange={setIsOn} checked={isOn} />
        </CardHeader>
        {isOn && (
          <>
            <CardContent className="mt-5">{children}</CardContent>
            <CardFooter className="w-full">
              <Button
                variant={"ghost"}
                className="w-full flex-2 p-7"
                onClick={add}
              >
                <PlusSquare className="text-blue-500" size={48} />
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    );
  }
);
