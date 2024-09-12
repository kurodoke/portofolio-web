"use client";

import { fontDisplay, fontSerif, fontText } from "@/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "@/assets/svg/logo.svg";
import { LogoAnimation } from "../logoAnimation";
import { EntryAnimation } from "../entryAnimation";
import {
    cubicBezier,
    delay,
    motion,
    useAnimate,
    useAnimation,
    Variants,
} from "framer-motion";
import { useAnimationStore } from "@/providers/IntroProvider";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { useMobileSidebarStore } from "@/providers/mobileSidebarProvider";

interface PageObject {
    nav: string;
    path: string;
}

export function Header({
    classname,
}: {
    classname?: React.HTMLAttributes<string> | string;
}): React.ReactElement {
    const nav: Array<PageObject> = new Array(
        {
            nav: "About",
            path: "/",
        },
        { nav: "Fullstack Developer", path: "/developer" },
        { nav: "Graphic Designer", path: "/designer" }
    );

    const pathname: string = usePathname();

    const { hasPlayed, setHasPlayed } = useAnimationStore((state) => state);
    const easing = cubicBezier(0.005, 0.88, 0.235, 0.985);
    const controls = useAnimation();

    const { isOpen, setIsOpen } = useMobileSidebarStore((state) => state);

    const variants: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: { delay: 3 + i * 0.2, duration: 0.5, easings: easing },
        }),
    };

    //handle on "menu" click mobile device
    const handleMobileMenuClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (!hasPlayed) {
            controls.mount();
            controls.start("visible");
        }
    }, [controls]);

    return (
        <header className={`${classname} select-none text-lg`}>
            <nav className="md:hidden flex items-center justify-end">
                <button
                    className={`${isOpen ? "hidden" : "text-black"}`}
                    onClick={handleMobileMenuClick}
                >
                    Menu
                </button>
                <button
                    className={`${!isOpen ? "hidden" : "text-white"}`}
                    onClick={handleMobileMenuClick}
                >
                    X
                </button>
            </nav>
            <nav className="hidden md:flex items-center justify-end">
                <div className={`flex gap-2 overflow-hidden`}>
                    {nav.map((_nav: PageObject, index: number) => {
                        return (
                            <motion.div
                                className=" flex items-center gap-2"
                                custom={index}
                                key={"navigation" + index}
                                animate={controls}
                                variants={variants}
                                initial={hasPlayed ? "visible" : "hidden"}
                            >
                                <div
                                    key={"nav-separator" + index}
                                    className={
                                        index == 0 ? "hidden" : "" + "separator"
                                    }
                                >
                                    <svg
                                        width="2"
                                        height="2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1"
                                            cy="1"
                                            r="1"
                                            fill="currentColor"
                                        ></circle>
                                    </svg>
                                </div>
                                <Link
                                    className={
                                        pathname == _nav.path
                                            ? "pointer-events-none text-black"
                                            : "text-whiteDisable hover:text-black transition-colors duration-[350ms] ease-out"
                                    }
                                    href={_nav.path}
                                    key={_nav.nav + index}
                                    aria-disabled={
                                        pathname == _nav.path ? "true" : "false"
                                    }
                                    tabIndex={
                                        pathname == _nav.path ? -1 : undefined
                                    }
                                >
                                    {_nav.nav}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
