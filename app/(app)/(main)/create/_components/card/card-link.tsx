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
import { forwardRef } from "react";
import { CardDetailProps } from "@/validation";

export const CardLink = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control, isOn, handleOn }, ref) => {
    const { fields, append, remove } = useFieldArray({
      control: control,
      name: "link",
    });

    const add = () => append({ description: "", url: "" });
    return (
      <ResumeCard
        title="링크"
        cardRef={ref}
        add={add}
        isOn={isOn}
        handleOn={handleOn}
      >
        <ul className="space-y-5">
          {fields.map((item, idx) => (
            <li className="flex gap-2" key={item.id}>
              <FormField
                name={`certi.${idx}.descrition`}
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormControl>
                      <Input placeholder="링크유형" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={`certi.${idx}.url`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="https://" {...field} />
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

CardLink.displayName = "CardLink";
