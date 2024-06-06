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
import { languageType } from "@/types";
import { Switch } from "../ui/switch";

export const CardEducation = forwardRef<HTMLDivElement>((props, ref) => {
  const [links, setLinks] = useState<languageType[]>([]);
  const [isOn, setIsOn] = useState(false);

  const handleAdd = () => {
    setLinks([
      ...links,
      {
        order: links.length,
        language: "english",
        test: "",
        score: "",
      },
    ]);
  };

  const handleDelete = (idx: number) => {
    const _links: languageType[] = [];
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
    if (name == "test") links[idx].test = value;
    if (name == "score") links[idx].score = value;
    setLinks([...links]);
  };

  return (
    <Card className="relative p-5" ref={ref}>
      <CardHeader>
        <CardTitle>학력</CardTitle>
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
              {links.map((item) => (
                <li
                  className="flex gap-5 bg-slate-50/50 py-5 px-10 rounded hover:bg-slate-100 duration-200"
                  key={item.order}
                >
                  <Input
                    placeholder="시험명"
                    className="w-24 uppercase"
                    value={item.test}
                    onChange={(e) => handleChange(e, item.order)}
                    name="test"
                  />
                  <Input
                    placeholder="점수"
                    value={item.score}
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
