"use client";

import { EntryAnimation } from "@/components/entryAnimation";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import Logo from "@/components/sections/Logo";
import { LogoAnimation } from "@/components/logoAnimation";
import { MobileSidebar } from "@/components/mobileSidebar";
import { TextEntryAnimation } from "@/components/textEntryAnimation";
import { MobileSidebarProvider } from "@/providers/mobileSidebarProvider";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/sections/Navigation";
import { IntroStoreProvider } from "@/providers/IntroProvider";

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    // const { hasPlayed, setHasPlayed } = useAnimationStore((state) => state);
    // const [isAnimating, setIsAnimating] = useState(!hasPlayed);

    useEffect(() => {}, []);

    return (
        <div className={`scroll relative`}>
            <IntroStoreProvider>
                <Logo />
            </IntroStoreProvider>
            <Navigation />
            {/* <MobileSidebarProvider>
                <MobileSidebar />
                <Header classname="fixed w-11/12 m-auto pt-5 md:pt-10 z-[21] max-h-[15vh] md:max-h-[20vh]" />
            </MobileSidebarProvider> */}
            <main className="w-10/12 m-auto pt-[15vh] md:pt-[20vh]">
                {children}
            </main>
            <Footer classname="w-10/12 m-auto" />
        </div>
    );
}
