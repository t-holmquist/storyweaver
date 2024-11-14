import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const oswald = localFont({
  src: "./fonts/Oswald-VariableFont_wght.ttf",
  variable: "--font-oswald",
});
const sourceSerif = localFont({
  src: "./fonts/SourceSerif4-VariableFont_opsz,wght.ttf",
  variable: "--font-sourceSerif",
});

export const metadata: Metadata = {
  title: "StoryWeaver",
  description: "Interactive storytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
