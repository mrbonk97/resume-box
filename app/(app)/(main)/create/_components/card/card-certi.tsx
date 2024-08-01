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

export const CardCertificate = forwardRef<HTMLDivElement, CardDetailProps>(
  ({ control, isOn, handleOn }, ref) => {
    const { fields, append, remove } = useFieldArray({
      control: control,
      name: "certi",
    });

    const add = () => append({ title: "", organization: "", date: "" });

    return (
      <ResumeCard
        title="자격증"
        cardRef={ref}
        add={add}
        isOn={isOn}
        handleOn={handleOn}
      >
        <ul className="space-y-5">
          {fields.map((item, idx) => (
            <li className="flex gap-2" key={item.id}>
              <FormField
                name={`certi.${idx}.title`}
                render={({ field }) => (
                  <FormItem className="w-40">
                    <FormControl>
                      <Input placeholder="자격증명" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={`certi.${idx}.organization`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="발급기관" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={`certi.${idx}.date`}
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormControl>
                      <Input placeholder="날짜" {...field} />
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

CardCertificate.displayName = "CardCertificate";
