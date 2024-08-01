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
import { RemoveButton } from "./remove-button";
import { CardDetailProps } from "@/validation";
import { forwardRef } from "react";

export const CardAward = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control, isOn, handleOn }, ref) => {
    const { fields, append, remove } = useFieldArray({
      control: control,
      name: "award",
    });

    const add = () =>
      append({ title: "", organization: "", date: "", description: "" });

    return (
      <ResumeCard
        title="수상"
        cardRef={ref}
        add={add}
        isOn={isOn}
        handleOn={handleOn}
      >
        <ul className="space-y-5">
          {fields.map((item, idx) => (
            <li className="flex gap-2" key={item.id}>
              <FormField
                name={`award.${idx}.title`}
                render={({ field }) => (
                  <FormItem className="w-40">
                    <FormControl>
                      <Input placeholder="수상명" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={`award.${idx}.organization`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="수상기관" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={`award.${idx}.date`}
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormControl>
                      <Input placeholder="날짜" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={`award.${idx}.description`}
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormControl>
                      <Input placeholder="설명" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <RemoveButton handleRemove={() => remove(idx)} />
            </li>
          ))}
        </ul>
      </ResumeCard>
    );
  }
);

CardAward.displayName = "CardAward";
