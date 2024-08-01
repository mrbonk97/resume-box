import { Button } from "@/components/ui/button";
import { PencilIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

interface ResumeCardProps {
  url: string;
  title: string;
  updatedAt?: string;
}

export const ResumeCard = ({ url, title, updatedAt }: ResumeCardProps) => {
  return (
    <li>
      <Link
        href={url}
        className="p-5 pt-10 h-60 w-52 flex flex-col items-center rounded-3xl shadow bg-slate-200"
      >
        <span className="text-xl font-medium">{title}</span>
        <Button variant={"ghost"} className="p-0 mt-10 h-16 w-16 rounded-full">
          {updatedAt ? <PencilIcon size={36} /> : <PlusCircle size={48} />}
        </Button>
        {updatedAt && (
          <span className="mt-5 text-sm">
            마지막 수정일 {updatedAt.substring(0, 10)}
          </span>
        )}
      </Link>
    </li>
  );
};
