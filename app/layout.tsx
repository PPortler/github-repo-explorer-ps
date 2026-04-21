import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Repo Explorer",
  description: "Search and explore GitHub repositories with ease. Powered by Next.js and GitHub API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Header />
        <main className="mx-auto w-full max-w-6xl sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
