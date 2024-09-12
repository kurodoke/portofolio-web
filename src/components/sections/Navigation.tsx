import { cubicBezier, motion, useAnimation, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

//navigation things
interface NavigationLinkInterface {
    name: string;
    path: string;
}

const nav: Array<NavigationLinkInterface> = new Array(
    {
        name: "about",
        path: "/",
    },
    { name: "fullstack developer", path: "/developer" },
    { name: "graphic designer", path: "/designer" }
);
//---

//animation things
const animationEase = cubicBezier(0.005, 0.88, 0.235, 0.985);

const animationVariant: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: 2 + i * 0.2,
            duration: 0.5,
            easings: animationEase,
        },
    }),
};
//---

function DotIcon(): React.ReactElement<React.SVGProps<SVGSVGElement>> {
    return (
        <svg width="2" height="2" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" fill="currentColor"></circle>
        </svg>
    );
}

function HamburgerIcon(): React.ReactElement<React.SVGProps<SVGSVGElement>> {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 12"
            fill="none"
            height={".75rem"}
            width={"auto"}
        >
            <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M0 1.25h26M0 6.25h26M0 11.25h26"
            ></path>
        </svg>
    );
}

function CloseIcon(): React.ReactElement<React.SVGProps<SVGSVGElement>> {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="none"
            height={".75rem"}
            width={"auto"}
        >
            <path
                d="M1 24L24 1M1 1L24 24"
                stroke="currentColor"
                stroke-width="1.5"
            ></path>
        </svg>
    );
}

export default function Navigation(): React.ReactElement {
    const pathname = usePathname();

    return (
        <header className="w-[calc(100vw-var(--scrollbar-width))] fixed top-0 left-0 text-lg">
            <div className="relative w-full">
                <div className="absolute right-5 top-5 md:right-10 md:top-10">
                    <div className="">
                        <HamburgerIcon />
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </header>
    );
}
