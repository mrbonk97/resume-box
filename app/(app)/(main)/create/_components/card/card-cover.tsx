"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ResumeCard } from "./resume-card";
import { useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { CardDetailProps } from "@/validation";
import { Textarea } from "@/components/ui/textarea";

export const CardCover = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control, isOn, handleOn }, ref) => {
    return (
      <ResumeCard
        title="자소서"
        cardRef={ref}
        add={() => {}}
        isOn={isOn}
        handleOn={handleOn}
      >
        <FormField
          name={`cover.title`}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="자소서 제목" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name={`cover.body`}
          render={({ field }) => (
            <FormItem className="mt-5 w-full">
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </ResumeCard>
    );
  }
);

CardCover.displayName = "CardCover";
