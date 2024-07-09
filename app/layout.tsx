import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume box",
  description: "이력서를 만드는 곳",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
