import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { ChangeEvent, forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusSquare, XIcon } from "lucide-react";
import { linkType } from "@/types";
import { Switch } from "@/components/ui/switch";
import { DatePicker } from "@/components/date-picker";

export const CardCertificate = forwardRef<HTMLDivElement>((props, ref) => {
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
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>자격증</CardTitle>
        <Switch onCheckedChange={setIsOn} checked={isOn} />
      </CardHeader>
      {isOn && (
        <>
          <CardContent className="mt-5">
            <ul className="space-y-5">
              {links.map((item) => (
                <li className="flex gap-2" key={item.order}>
                  <Input
                    placeholder="자격증"
                    className="w-36"
                    value={item.desc}
                    onChange={(e) => handleChange(e, item.order)}
                    id="desc"
                    name="desc"
                  />
                  <Input
                    placeholder="발급기관"
                    value={item.url}
                    onChange={(e) => handleChange(e, item.order)}
                    id="url"
                    name="url"
                  />
                  <DatePicker />
                  <Button
                    className="aspect-square p-0 m-0"
                    variant={"secondary"}
                    onClick={() => handleDelete(item.order)}
                  >
                    <XIcon />
                  </Button>
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
