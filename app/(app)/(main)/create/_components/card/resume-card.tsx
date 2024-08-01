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
import { PlusSquare } from "lucide-react";

interface CardProps {
  title: string;
  add: () => void;
  children: React.ReactNode;
  isOn: boolean;
  handleOn: () => void;
  cardRef: any;
}

export const ResumeCard = ({
  title,
  add,
  children,
  isOn,
  handleOn,
  cardRef,
}: CardProps) => {
  return (
    <Card className="relative p-5 card" ref={cardRef}>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <Switch onCheckedChange={handleOn} checked={isOn} />
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
};

ResumeCard.displayName = "ResumeCard";
