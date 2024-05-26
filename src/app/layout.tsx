import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sanket Shende",
  description: "Portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>
  );
}
