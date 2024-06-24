import { PackageOpen } from "lucide-react";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (user != null) redirect("/list");

  return (
    <main className="h-full w-full flex items-center flex-col justify-evenly">
      <h1 className="text-7xl text-blue-500 font-bold tracking-wide">
        이력서 박스
      </h1>
      <Link
        href={"/sign-in"}
        className="p-5 hover:bg-primary-foreground rounded-2xl duration-100"
      >
        <PackageOpen className="text-blue-500" size={128} />
      </Link>
    </main>
  );
}
