import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { ChangeEvent, forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusSquare, XIcon } from "lucide-react";
import { linkType } from "@/types";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const CardEducation = forwardRef<HTMLDivElement>((props, ref) => {
  const [isOn, setIsOn] = useState(false);
  const [links, setLinks] = useState<linkType[]>([
    {
      order: 0,
      desc: "",
      url: "",
    },
  ]);

  const handleAdd = () => {
    setLinks([
      ...links,
      {
        order: links.length,
        desc: "",
        url: "",
      },
    ]);
  };

  const handleDelete = (idx: number) => {
    const _links: linkType[] = [];
    let count = 0;
    links.map((item) => {
      if (item.order != idx) _links.push({ ...item, order: count++ });
    });
    setLinks(_links);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value, name } = e.target;
    if (name == "desc") links[idx].desc = value;
    if (name == "url") links[idx].url = value;
    setLinks([...links]);
  };

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
              {links.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full grid grid-cols-10 gap-2 items-center">
                    <Label className="col-span-1 text-right">기간</Label>
                    <div className="col-span-9 flex gap-2">
                      <Input placeholder="yyyy.mm" />
                      <Input placeholder="yyyy.mm" />
                      <Button
                        className="p-0 aspect-square"
                        variant={"secondary"}
                        onClick={() => handleDelete(item.order)}
                      >
                        <XIcon />
                      </Button>
                    </div>
                    <Label className="col-span-1 text-right">학교명</Label>
                    <Input placeholder="학교명" className="col-span-9" />
                    <Label className="col-span-1 text-right">전공명</Label>
                    <Input placeholder="전공명" className="col-span-9" />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <Button
              variant={"ghost"}
              className="w-full flex-2 p-7"
              onClick={handleAdd}
            >
              <PlusSquare className="text-blue-500" size={48} />
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
});
