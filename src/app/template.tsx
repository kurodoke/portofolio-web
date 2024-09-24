"use client";

import Logo from "@/components/Logo/Logo";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import { IntroStoreProvider } from "@/providers/IntroProvider";
import { PageProvider, usePageStore } from "@/providers/pageProvider";
import { motion, useAnimation, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { aboutEase } from "@/components/page/About/animation";

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    useEffect(() => {
        window.addEventListener("beforeunload", () => {
            sessionStorage.removeItem("intro-played");
            sessionStorage.removeItem("page-change");
        });
    }, []);

    return (
        <PageProvider>
            <div className={`content`}>
                <IntroStoreProvider>
                    <Logo />
                    <Navigation />
                    <RootMain>{children}</RootMain>
                </IntroStoreProvider>
            </div>
        </PageProvider>
    );
}

function RootMain({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    const { isChange, setIsChange, pathPage, setPathPage } = usePageStore();
    const router = useRouter();

    const [isInitial, setIsInitial] = useState<boolean>(true);

    const controls = useAnimation();

    const variant: Variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        setIsChange(false);
        setPathPage("");
        setIsInitial(false);
    }, []);

    useEffect(() => {
        if (isInitial) return;
        if (isChange) controls.start("hidden");
    }, [isChange]);

    return (
        <motion.div
            animate={controls}
            variants={variant}
            transition={{ duration: 0.5, ease: aboutEase }}
            onAnimationComplete={() => {
                router.push(pathPage, { scroll: true });
            }}
            className="wrapper pt-[3.725rem] md:pt-[5rem]"
        >
            {children}
        </motion.div>
    );
}
