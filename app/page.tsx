import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 px-20 w-full h-20 flex items-center justify-between shadow-sm">
        <Logo />
        <nav className="flex gap-3 items-center">
          <Link href={"/product"}>블로그</Link>
          <span>·</span>
          <Link href={"/product"}>다른 제품</Link>
          <span>·</span>
          <Link href={"/product"}>지원</Link>
        </nav>
        <Button className="rounded-none">로그인</Button>
      </header>
      <main className="h-[calc(100%-3rem)] flex">
        <div className="w-1/2 pt-60 pl-40">
          <hgroup>
            <h2 className="text-5xl font-bold">맞춤형 이력서 관리 플랫폼</h2>
            <h1 className="mt-3 text-5xl font-bold">resume-box</h1>
          </hgroup>

          {/* 중간파트 */}
          <div className="pl-5">
            <p className="text-lg font-medium mt-20">
              기존의 이력서 플랫폼과는 자율성을 강조했다는 문구.
              <br /> 커스터마이징이 쉽다는 문구 <br />
              정말 좋다는 문구
            </p>
            <div className="pl-2 mt-5 flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-lg">
                <span className="font-semibold">김현석</span>
                <span className="text-sm">수석 개발자</span>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Button asChild className="rounded-none">
              <Link href="/sign-up">시작하기</Link>
            </Button>
            <Button className="ml-5 rounded-none">예제 확인하기</Button>
          </div>
        </div>
        <div className="relative w-1/2 h-full flex items-center justify-center">
          <div className="z-10 w-[450px] h-[550px] rounded-lg flex justify-center bg-white shadow-lg p-0">
            <Image
              src={"/images/3d_character.png"}
              alt="person"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div
            className="absolute z-0 top-[55%] left-[50%] w-[600px] h-[600px] bg-gradient-to-b from-yellow-300 from-10% via-transparent via-50% to-transparent rounded-[100%]"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </main>
      <footer className="h-12 flex items-center justify-center gap-10 text-sm">
        <Link href={"/policy"}>개인정보처리방침</Link>
        <Link href={"/customer"}>고객센터</Link>
      </footer>
    </>
  );
}
