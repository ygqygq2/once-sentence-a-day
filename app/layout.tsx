import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "每天一句话",
  description: "记录每天的一句话，用时间线展示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
