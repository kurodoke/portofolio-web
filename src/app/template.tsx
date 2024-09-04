"use client";

import { EntryAnimation } from "@/components/entryAnimation";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { LogoAnimation } from "@/components/logoAnimation";
import { MobileSidebar } from "@/components/mobileSidebar";
import { TextEntryAnimation } from "@/components/textEntryAnimation";
import { useAnimationStore } from "@/providers/entryAnimationProvider";
import { MobileSidebarProvider } from "@/providers/mobileSidebarProvider";
import {
    animate,
    AnimatePresence,
    useAnimation,
    useAnimationControls,
} from "framer-motion";
import React, { useEffect, useState } from "react";

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    const { hasPlayed, setHasPlayed } = useAnimationStore((state) => state);
    const [isAnimating, setIsAnimating] = useState(!hasPlayed);

    useEffect(() => {}, []);

    return (
        <div className={`scroll`}>
            <AnimatePresence>
                {isAnimating && (
                    <EntryAnimation
                        classname="z-[200]"
                        onAnimationComplete={() => {
                            setIsAnimating(false);
                            setHasPlayed();
                        }}
                    >
                        <LogoAnimation fill="#ffab91" />
                        <TextEntryAnimation />
                    </EntryAnimation>
                )}
            </AnimatePresence>
            <div className="fixed w-[calc(100vw-10px)] m-auto overflow-hidden z-20 max-h-[15vh] md:max-h-[20vh]">
                <LogoAnimation fill="#000000" />
            </div>
            <MobileSidebarProvider>
                <MobileSidebar />
                <Header classname="fixed w-11/12 m-auto pt-5 md:pt-10 z-[21] max-h-[15vh] md:max-h-[20vh]" />
            </MobileSidebarProvider>
            <main className="w-10/12 m-auto pt-[15vh] md:pt-[20vh]">
                {children}
            </main>
            <Footer classname="w-10/12 m-auto" />
        </div>
    );
}
