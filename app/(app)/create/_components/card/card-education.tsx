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
import { ResumeControlType } from "@/validation";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const CardEducation = forwardRef<HTMLDivElement, ResumeControlType>(
  ({ control }, ref) => {
    const { fields, append, remove, update } = useFieldArray({
      control: control,
      name: "edu",
    });
    const [isOn, setIsOn] = useState(false);

    return (
      <Card className="relative p-5 card" ref={ref}>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>학력</CardTitle>
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
                          name={`edu.${idx}.start_date`}
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
                          name={`edu.${idx}.end_date`}
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
                        name={`edu.${idx}.school`}
                        render={({ field }) => (
                          <FormItem className="col-span-10 grid grid-cols-10 items-center gap-2">
                            <FormLabel className="col-span-1 text-right">
                              학교명
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="한국대학교"
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
                        name={`edu.${idx}.major`}
                        render={({ field }) => (
                          <FormItem className="col-span-10 grid grid-cols-10 items-center gap-2">
                            <FormLabel className="col-span-1 text-right">
                              전공명
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="컴퓨터공학과"
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
                variant={"ghost"}
                className="w-full flex-2 p-7"
                onClick={() =>
                  append({
                    start_date: "",
                    end_date: "",
                    school: "",
                    major: "",
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
