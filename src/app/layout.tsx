import type { Metadata } from "next";

import "./globals.css";
import { fontText } from "@/font";

export const metadata: Metadata = {
    title: "Arief Satrio - Portofolio",
    description:
        "Explore the portfolio of Arief Satrio, showcasing expertise in graphic design, web development and cloud computing. View projects and skills.",
    keywords:
        "Arief Satrio, Full Stack Developer, Cloud Engineer, Graphic Design, Web Development, Backend, Google Cloud, Vercel, Portfolio, Software Engineer, Poster, Music Video, Motion Poster, Motion Graphic, Nextjs, Reactjs, Laravel",
    robots: "index, follow",
    openGraph: {
        title: "Arief Satrio - Portofolioo",
        description:
            "Explore projects and skills of Arief Satrio in full stack development, cloud computing, and graphic design.",
        type: "website",
        url: "https://ariefsatrio.com",
        siteName: "Arief Satrio Portfolio",
        countryName: "Indonesia",
        emails: "ariefsatrio098@gmail.com",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Arief Satrio",
                        jobTitle: "Full Stack Developer, Graphic Designer",
                        url: "https://ariefsatrio.com",
                        sameAs: [
                            "https://www.linkedin.com/in/arief-satrio-budi-prasojo",
                            "https://github.com/kurodoke",
                        ],
                        description:
                            "Arief Satrio is a Full Stack Developer and Graphic Designer with expertise in combines artistic vision with technical skill.",
                    })}
                </script>
            </head>
            <body
                className={`${fontText.className} bg-custom-gray relative min-h-screen overflow-y-scroll overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
