import { Pencil, PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ListPage = () => {
  return (
    <main className="min-h-full w-full radical-bg flex2 flex-col gap-20 py-24">
      <h1 className="text-5xl font-semibold text-neutral-800">
        이력서 선택해주세요
      </h1>
      <section className="w-full px-20">
        <ul className="flex flex-wrap items-center justify-center gap-10">
          <li>
            <Card className="h-96 w-80 flex2">
              <CardContent className="h-full flex items-center flex-col justify-evenly">
                <span className="text-4xl font-semibold text-neutral-800">
                  새로운 이력서
                </span>
                <Link href="/create">
                  <Button variant={"ghost"} className="h-32 w-32 rounded-full">
                    <PlusCircle className="text-blue-500" size={72} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card className="h-96 w-80 flex2">
              <CardContent className="h-full flex items-center flex-col justify-evenly">
                <span className="text-4xl font-semibold text-neutral-800">
                  이력서1
                </span>
                <Button variant={"ghost"} className="h-32 w-32 rounded-full">
                  <Pencil className="text-blue-500" size={72} />
                </Button>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ListPage;
