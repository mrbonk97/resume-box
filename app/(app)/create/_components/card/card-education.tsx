"use client";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { useFieldArray } from "react-hook-form";
import { CardDetailProps } from "@/validation";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ResumeCard } from "./resume-card";
import { RemoveButton } from "./remove-button";

export const CardEducation = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control }, ref) => {
    const { fields, append, remove } = useFieldArray({
      control: control,
      name: "edu",
    });

    const add = () =>
      append({ start_date: "", end_date: "", major: "", school: "" });

    return (
      <ResumeCard ref={ref} title="학력" add={add}>
        <ul className="space-y-7">
          {fields.map((item, idx) => (
            <li key={item.id} className="space-y-2">
              <div className="grid grid-cols-10 items-center gap-2">
                <Label className="col-span-1 text-right">기간</Label>
                <div className="col-span-9 flex items-center gap-2">
                  <FormField
                    control={control}
                    name={`edu.${idx}.start_date`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="yyyy.mm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`edu.${idx}.end_date`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="yyyy.mm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <RemoveButton handleRemove={() => remove(idx)} />
                </div>
              </div>
              <FormField
                control={control}
                name={`edu.${idx}.school`}
                render={({ field }) => (
                  <FormItem className="grid grid-cols-10 items-center gap-2 space-y-0">
                    <FormLabel className="col-span-1 text-right">
                      학교명
                    </FormLabel>
                    <FormControl className="col-span-9">
                      <Input placeholder="전남대학교" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`edu.${idx}.major`}
                render={({ field }) => (
                  <FormItem className="grid grid-cols-10 items-center gap-2 space-y-0">
                    <FormLabel className="col-span-1 text-right">
                      전공명
                    </FormLabel>
                    <FormControl className="col-span-9">
                      <Input placeholder="컴퓨터공학과" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </li>
          ))}
        </ul>
      </ResumeCard>
    );
  }
);
