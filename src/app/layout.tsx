import type { Metadata } from "next";

import "./globals.css";
import { istok } from "../font";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";

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
            <body
                className={`${istok.className} m-4 md:m-10 flex flex-col gap-4 md:gap-10`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
