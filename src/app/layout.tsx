import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calorie Intake Calculator",
  description: "Track your daily calorie intake and meal planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="pl-16">
            <Header />
            <main className="pt-24">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
