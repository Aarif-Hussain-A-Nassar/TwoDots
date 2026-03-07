import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Two Dots | Digital Agency",
  description: "Crafting digital experiences that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGlow />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
