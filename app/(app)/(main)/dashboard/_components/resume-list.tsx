"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ResumeCard } from "./resume-card";
import { createResume, getResumes } from "@/lib/api/resume-api";
import { ResumeCompact } from "@/types";
import { Button } from "@/components/ui/button";
import { PlusCircle, RabbitIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SkeletonCard } from "./skeleton-card";
import Link from "next/link";

export const ResumeList = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["resumes"],
    queryFn: getResumes,
  });

  const mutate = useMutation({
    mutationFn: createResume,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
      console.log("새로운 거 생성 가즈아");
      router.push(`/resumes/${data.data.id}`);
    },
  });

  const handleCreate = () => mutate.mutate();

  return (
    <ul className="flex gap-10 flex-wrap">
      <li>
        <Link
          href={"/create"}
          className="p-5 pt-10 h-60 w-52 flex flex-col items-center rounded-3xl shadow bg-slate-100"
        >
          <span className="text-xl font-medium">테스트</span>
          <Button
            variant={"ghost"}
            className="p-0 mt-10 h-16 w-16 rounded-full"
          >
            <RabbitIcon size={48} />
          </Button>
        </Link>
      </li>
      <li
        onClick={handleCreate}
        className="p-5 pt-10 h-60 w-52 flex flex-col items-center rounded-3xl
        shadow bg-slate-100"
      >
        <span className="text-xl font-medium">새로운 이력서</span>
        <Button variant={"ghost"} className="p-0 mt-10 h-16 w-16 rounded-full">
          <PlusCircle size={48} />
        </Button>
      </li>
      {isPending && <SkeletonCard />}
      {isPending && <SkeletonCard />}
      {isPending && <SkeletonCard />}
      {isSuccess &&
        data?.data.result.resumes.map((item: ResumeCompact) => (
          <ResumeCard
            key={item.id}
            url={`/resumes/${item.id}`}
            title={item.title}
            updatedAt={item.updatedAt}
          />
        ))}
    </ul>
  );
};
