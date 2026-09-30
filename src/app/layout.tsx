import { SidebarLayout } from "@/components/layout/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Muhammad Riffat Rizqullah",
    description: "Halaman Auth Muhammad Riffat Rizqullah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.variable} font-sans min-h-full flex flex-col`} suppressHydrationWarning>
                <TooltipProvider>
                    <SidebarLayout>{children}</SidebarLayout>
                </TooltipProvider>
            </body>
        </html>
    );
}
