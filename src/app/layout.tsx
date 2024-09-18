import type { Metadata } from "next";

import "./globals.css";
import { fontText } from "@/font";

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
                className={`${fontText.className} bg-custom-gray relative min-h-screen overflow-y-scroll overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
