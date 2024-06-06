import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const LogoutPage = () => {
  return (
    <main className="h-full w-full radical-bg flex2">
      <Card className="w-96 pt-10 px-10">
        <CardContent className="h-52 flex flex-col items-center justify-between">
          <span className="text-6xl ">😊</span>
          <h2 className="text-3xl font-semibold">로그아웃 완료</h2>
          <span>
            메인으로
            <Link href={"/"} className="ml-1">
              <u className="underline-offset-4">돌아가기</u>
            </Link>
          </span>
        </CardContent>
      </Card>
    </main>
  );
};

export default LogoutPage;
