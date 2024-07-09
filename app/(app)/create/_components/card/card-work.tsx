"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusSquare, XIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ResumeControlType } from "@/validation";

export const CardWork = forwardRef<HTMLDivElement, ResumeControlType>(
  ({ control }, ref) => {
    const { fields, append, remove, update } = useFieldArray({
      control: control,
      name: "work",
    });
    const [isOn, setIsOn] = useState(false);

    return (
      <Card className="relative p-5 card" ref={ref}>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>경력</CardTitle>
          <Switch onCheckedChange={(e) => setIsOn(e)} checked={isOn} />
        </CardHeader>
        {isOn && (
          <>
            <CardContent className="mt-5">
              <ul className="space-y-5">
                {fields.map((item, idx) => (
                  <li key={item.id}>
                    <div className="w-full grid grid-cols-10 gap-2 items-center">
                      <Label className="col-span-1 text-right">기간</Label>
                      <div className="col-span-9 flex gap-2">
                        <FormField
                          control={control}
                          name={`work.${idx}.start_date`}
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  placeholder="yyyy.mm"
                                  className="col-span-9"
                                  {...field}
                                />
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
                                <Input
                                  placeholder="yyyy.mm"
                                  className="col-span-9"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          className="p-0 aspect-square"
                          variant={"secondary"}
                          tabIndex={-1}
                          onClick={() => {
                            remove(idx);
                          }}
                        >
                          <XIcon />
                        </Button>
                      </div>
                      <FormField
                        control={control}
                        name={`work.${idx}.company`}
                        render={({ field }) => (
                          <FormItem className="col-span-10 grid grid-cols-10 items-center gap-2">
                            <FormLabel className="col-span-1 text-right">
                              회사명
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="한국전력"
                                className="col-span-9"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name={`work.${idx}.department`}
                        render={({ field }) => (
                          <FormItem className="col-span-10 grid grid-cols-10 items-center gap-2">
                            <FormLabel className="col-span-1 text-right">
                              부서/직급
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="고도화TF/주임"
                                className="col-span-9"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button
                type="button"
                variant={"ghost"}
                className="w-full flex-2 p-7"
                onClick={() =>
                  append({
                    company: "",
                    department: "",
                    end_date: "",
                    start_date: "",
                  })
                }
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
