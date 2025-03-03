import type { Metadata } from "next";
import { Source_Code_Pro } from 'next/font/google'
import { Nav } from "@/components/Nav";
import "./globals.css";

const sourceCodeProFont = Source_Code_Pro({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Evan Holmes",
  description: "A handspun portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-dvh p-4 ${sourceCodeProFont.className}`}
      >
        <div className="flex flex-row">
          <Nav />
          {children}
        </div>
        <div className="paperOverlay"></div>
      </body>
    </html>
  );
}
