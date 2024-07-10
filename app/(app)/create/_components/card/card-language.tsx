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

export const CardLanguage = ({ ref, control }: CardDetailProps) => {
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "language",
  });

  const add = () => append({ language: "", test: "", score: "" });

  return (
    <ResumeCard title="외국어" ref={ref} add={add}>
      <ul className="space-y-5">
        {fields.map((item, idx) => (
          <li className="flex gap-2" key={item.id}>
            <FormField
              name={`language.${idx}.language`}
              render={({ field }) => (
                <FormItem className="w-40">
                  <FormControl>
                    <Input placeholder="언어" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`language.${idx}.test`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="시험명" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`language.${idx}.score`}
              render={({ field }) => (
                <FormItem className="w-32">
                  <FormControl>
                    <Input placeholder="성적" {...field} />
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
};
