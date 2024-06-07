import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENextJS",
  description: "Eles' Next.js playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="absolute bottom-0 w-full">
          <div className="bg-blue-700 rounded-lg text-center text-white font-bold border shadow-lg">
            <Link className="text-lg block w-full" href={"/"}>Back to Home</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
