import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "@/app/globals.scss";

const noto = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messenger App",
  description: "Messenger App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
