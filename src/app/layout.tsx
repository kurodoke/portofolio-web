import type { Metadata } from "next";

import "./globals.css";
import { fontDisplay, fontSerif, fontText } from "@/font";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { EntryAnimation } from "@/components/entryAnimation";
import { LogoAnimation } from "@/components/logoAnimation";

export const metadata: Metadata = {
    title: "Arief Satrio - Portofolio",
    description: "Arief Satrio Portofolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${fontText.className} bg-grayBackground relative min-h-screen overflow-y-scroll overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
