import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="py-10 min-h-full w-full flex2">
      <SignIn />
    </main>
  );
}
