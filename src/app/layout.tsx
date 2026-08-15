import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/shell"

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riffat Manajemen Siswa",
  description: "Sistem Informasi Manajemen Siswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
