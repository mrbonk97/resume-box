import { Button } from "@/components/ui/button";
import { PencilIcon, PlusCircle } from "lucide-react";

const DashBoardPage = () => {
  return (
    <>
      <section>
        <h2 className="text-3xl font-medium">대시보드</h2>
      </section>
      <section className="mt-5 h-full p-2">
        <h3 className="pt-1 pb-4 pl-4 font-medium">이력서 목록</h3>
        <ul className="flex flex-wrap gap-10">
          <li className="p-5 pt-10 h-60 w-52 flex flex-col items-center rounded-3xl shadow bg-slate-200">
            <span className="text-xl font-medium">새로운 이력서</span>
            <Button
              variant={"ghost"}
              className="p-0 mt-10 h-16 w-16 rounded-full"
            >
              <PlusCircle size={48} />
            </Button>
          </li>
          <li className="p-5 pt-10 h-60 w-52 flex flex-col items-center rounded-3xl shadow bg-slate-200">
            <span className="text-xl font-medium">이력서 02</span>
            <Button
              variant={"ghost"}
              className="p-0 mt-10 h-16 w-16 rounded-full"
            >
              <PencilIcon size={36} />
            </Button>
            <span className="mt-5 text-sm">마지막 수정일: 06.23</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default DashBoardPage;
