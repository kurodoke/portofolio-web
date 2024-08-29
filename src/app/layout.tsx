import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { istok } from "@/font";

export const metadata: Metadata = {
    title: "KURODOKE",
    description: "Portofolio of Kurodoke",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main
                    className={`${istok.className} bg-white m-2 sm:m-10 flex flex-col gap-2 sm:gap-6`}
                >
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
