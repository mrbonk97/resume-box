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
import { MinusCircle, PlusSquare } from "lucide-react";
import { certiType, languageType } from "@/types";
import { Switch } from "../ui/switch";

export const CardCertificate = forwardRef<HTMLDivElement>((props, ref) => {
  const [certi, setCerti] = useState<certiType[]>([]);
  const [isOn, setIsOn] = useState(false);

  const handleAdd = () => {
    setCerti([
      ...certi,
      {
        order: certi.length,
        date: "",
        title: "",
        desc: "",
      },
    ]);
  };

  const handleDelete = (idx: number) => {
    const _links: certiType[] = [];
    let count = 0;
    certi.map((item) => {
      if (item.order != idx) _links.push({ ...item, order: count++ });
    });
    console.log(_links);

    setCerti(_links);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value, name } = e.target;
    console.log(value, name, idx);
    if (name == "title") certi[idx].title = value;
    if (name == "date") certi[idx].date = value;
    if (name == "desc") certi[idx].desc = value;
    setCerti([...certi]);
  };

  return (
    <Card className="relative p-5" ref={ref}>
      <CardHeader>
        <CardTitle>자격증 및 수상</CardTitle>
        <Switch
          className="absolute top-5 right-5"
          onCheckedChange={(e) => setIsOn(e)}
          checked={isOn}
        />
      </CardHeader>

      {isOn && (
        <>
          <CardContent className="mt-5">
            <ul className="space-y-2 max-w-[1000px]">
              {certi.map((item) => (
                <li
                  className="flex gap-5 bg-slate-50/50 py-5 px-10 rounded hover:bg-slate-100 duration-200"
                  key={item.order}
                >
                  <Input
                    placeholder="시험명"
                    className="w-24 uppercase"
                    value={item.title}
                    onChange={(e) => handleChange(e, item.order)}
                    name="test"
                  />
                  <Input
                    placeholder="설명"
                    value={item.desc}
                    onChange={(e) => handleChange(e, item.order)}
                    name="score"
                  />
                  <Button
                    variant={"destructive"}
                    onClick={() => handleDelete(item.order)}
                  >
                    <MinusCircle />
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
