import type { Metadata } from "next";

import "./globals.css";
import { fontDisplay, fontSerif, fontText } from "@/font";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

export const metadata: Metadata = {
    title: "Arief Satrio - FullStack",
    description: "Arief Satrio Portofolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontDisplay.className} bg-grayBackground`}>
                <main className="mt-4 md:mt-6">
                    <Header classname="w-10/12 m-auto" />
                    {children}
                    <Footer classname="w-10/12 m-auto" />
                </main>
            </body>
        </html>
    );
}
