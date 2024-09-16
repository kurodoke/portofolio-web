"use client";

import { Footer } from "@/components/layouts/footer";
import Logo from "@/components/Logo/Logo";
import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import { IntroStoreProvider } from "@/providers/IntroProvider";

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <div className={`scroll relative`}>
            <IntroStoreProvider>
                <Logo />
                <Navigation />
                <div className="wrapper p-5 md:p-10 m-auto pt-[15vh] md:pt-[20vh]">
                    {children}
                </div>
            </IntroStoreProvider>
            <Footer classname="w-10/12 m-auto" />
        </div>
    );
}
