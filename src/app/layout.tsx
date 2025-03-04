import type { Metadata } from "next";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div>
          <header>
            <Link href={"/"}>home</Link>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
