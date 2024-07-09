import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { ChangeEvent, forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusSquare, XIcon } from "lucide-react";
import { linkType } from "@/types";
import { Switch } from "@/components/ui/switch";

export const CardLanguage = forwardRef<HTMLDivElement>((props, ref) => {
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
        <CardTitle>외국어</CardTitle>
        <Switch onCheckedChange={(e) => setIsOn(e)} checked={isOn} />
      </CardHeader>
      {isOn && (
        <>
          <CardContent className="mt-5">
            <ul className="space-y-5">
              {links.map((item) => (
                <li className="flex gap-2" key={item.order}>
                  <Select defaultValue="english">
                    <SelectTrigger className="w-52">
                      <SelectValue placeholder="언어" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">영어</SelectItem>
                      <SelectItem value="japanese">일본어</SelectItem>
                      <SelectItem value="chinese">중국어</SelectItem>
                      <SelectItem value="other">직접입력</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input className="w-32" placeholder="" disabled />

                  <Input
                    placeholder="시험명"
                    className="w-40"
                    value={item.desc}
                    onChange={(e) => handleChange(e, item.order)}
                    id="desc"
                    name="desc"
                  />
                  <Input
                    placeholder="성적"
                    value={item.url}
                    onChange={(e) => handleChange(e, item.order)}
                    id="url"
                    name="url"
                  />
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
