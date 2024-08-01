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

export const CardWork = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control, isOn, handleOn }, ref) => {
    const { fields, append, remove } = useFieldArray({
      control: control,
      name: "work",
    });

    const add = () =>
      append({ start_date: "", end_date: "", company: "", department: "" });

    return (
      <ResumeCard
        title="경력"
        add={add}
        isOn={isOn}
        handleOn={handleOn}
        cardRef={ref}
      >
        <ul className="space-y-7">
          {fields.map((item, idx) => (
            <li key={item.id} className="space-y-2">
              <div className="grid grid-cols-10 items-center gap-2">
                <Label className="col-span-1 text-right">기간</Label>
                <div className="col-span-9 flex items-center gap-2">
                  <FormField
                    control={control}
                    name={`work.${idx}.start_date`}
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
                    name={`work.${idx}.end_date`}
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
                name={`work.${idx}.company`}
                render={({ field }) => (
                  <FormItem className="grid grid-cols-10 items-center gap-2 space-y-0">
                    <FormLabel className="col-span-1 text-right">
                      회사명
                    </FormLabel>
                    <FormControl className="col-span-9">
                      <Input placeholder="한전KDN" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`work.${idx}.department`}
                render={({ field }) => (
                  <FormItem className="grid grid-cols-10 items-center gap-2 space-y-0">
                    <FormLabel className="col-span-1 text-right">
                      부서/직급
                    </FormLabel>
                    <FormControl className="col-span-9">
                      <Input placeholder="원전ERP고도화" {...field} />
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

CardWork.displayName = "CardWork";
