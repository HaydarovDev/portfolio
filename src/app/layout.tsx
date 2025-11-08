import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asadbek Haydarov",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body
        className={`${poppins.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
