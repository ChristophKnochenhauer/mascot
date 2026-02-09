import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "MATHCOT",
  description: "Math Animations on Slides for Contextual Teaching",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}