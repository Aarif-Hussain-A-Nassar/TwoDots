import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import CursorGlow from "@/components/CursorGlow";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-serif" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
  title: "moro. | System Architect",
  description: "Crafting digital experiences that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${jetbrains.variable}`}>
      <body className={jetbrains.className}>
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
