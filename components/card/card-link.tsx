import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent, forwardRef, useState } from "react";
import { Button } from "../ui/button";
import { MinusCircle, PlusSquare, X } from "lucide-react";
import { linkType } from "@/types";
import { Switch } from "../ui/switch";

export const CardLink = forwardRef<HTMLDivElement>((props, ref) => {
  const [links, setLinks] = useState<linkType[]>([]);
  const [isOn, setIsOn] = useState(false);

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
    console.log(_links);

    setLinks(_links);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value, name } = e.target;
    console.log(value, name, idx);
    if (name == "desc") links[idx].desc = value;
    if (name == "url") links[idx].url = value;
    setLinks([...links]);
  };

  return (
    <Card className="relative p-5" ref={ref}>
      <CardHeader>
        <CardTitle>링크</CardTitle>
        <Switch
          className="absolute top-5 right-5"
          onCheckedChange={(e) => setIsOn(e)}
          checked={isOn}
        />
      </CardHeader>

      {isOn && (
        <>
          <CardContent className="mt-5">
            <ul className="space-y-5">
              {links.map((item) => (
                <li
                  className="flex gap-5 bg-slate-50 py-5 px-10 rounded hover:bg-slate-100 duration-200 relative"
                  key={item.order}
                >
                  <Input
                    placeholder="링크 유형"
                    className="w-24"
                    value={item.desc}
                    onChange={(e) => handleChange(e, item.order)}
                    id="desc"
                    name="desc"
                  />
                  <Input
                    placeholder="https://"
                    value={item.url}
                    onChange={(e) => handleChange(e, item.order)}
                    id="url"
                    name="url"
                  />
                  <Button
                    className="absolute top-3 right-3 p-0 h-4 w-4 flex2"
                    variant={"ghost"}
                    onClick={() => handleDelete(item.order)}
                  >
                    <X size={16} className="text-primary" />
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
