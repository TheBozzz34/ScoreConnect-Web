import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScoreConnect Web",
  description: "Create beautiful displays regardless of your design experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  );
}
