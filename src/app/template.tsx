"use client";

import Logo from "@/components/Logo/Logo";
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation/Navigation";
import { IntroStoreProvider } from "@/providers/IntroProvider";

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    useEffect(() => {
        window.addEventListener("beforeunload", () => {
            sessionStorage.removeItem("intro-played");
        });
    }, []);

    return (
        <div className={`content`}>
            <IntroStoreProvider>
                <Logo />
                <Navigation />
                <div className="wrapper pt-[3.725rem] md:pt-[5rem]">
                    {children}
                </div>
            </IntroStoreProvider>
        </div>
    );
}
