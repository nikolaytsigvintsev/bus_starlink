import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/UI/layout/header";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { auth } from "@/auth/auth";
import TitlePage from "@/components/UI/layout/TitlePage";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SessionProvider session={session}>
            <div className="font-sans grid grid-rows-[40px_auto_1fr_40px] items-start justify-items-start min-h-screen p-8 w-full max-w-5xl mx-auto">
              <Header mainNav={siteConfig.mainNav} />
              <TitlePage />
              <main className="flex flex-col gap-[32px] row-start-3 items-start sm:items-start">
                {children}
              </main>
              <footer className="row-start-4 flex gap-[24px] flex-wrap items-center justify-center">
                {siteConfig.links.twitter && (
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737-1.597.598-2.643 1.64-3.22 3.257-2.775-.166-5.555-1.555-7.865-3.777-1.013 1.74-.513 3.813.517 5.475C2.432 10.07 1.64 9.575.965 8.768c-.054 1.81 1.26 3.515 2.548 4.098-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.693.188-1.452.232-2.224.084.623 1.946 2.444 3.362 4.604 3.404-2.07 1.623-4.678 2.348-7.29 2.04C4.22 19.29 6.548 20 8.97 20c11.28 0 17.44-9.338 17.44-17.44 0-.266-.006-.533-.018-.797A12.487 12.487 0 0 0 22 4.01Z" />
                    </svg>
                    <span className="text-sm">Follow us on Twitter</span>
                  </a>
                )}
              </footer>
            </div>
          </SessionProvider>
        </Providers>

      </body>
    </html>
  );
}
