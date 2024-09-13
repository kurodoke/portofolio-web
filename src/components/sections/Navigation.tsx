import {
    AnimatePresence,
    cubicBezier,
    motion,
    useAnimation,
    Variants,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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
    {
        name: "fullstack developer",
        path: "/developer",
    },
    {
        name: "graphic designer",
        path: "/designer",
    }
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
        >
            <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M0 1.25h26M0 6.25h26M0 11.25h26"
            ></path>
        </svg>
    );
}

function CloseIcon(): React.ReactElement<React.SVGProps<SVGSVGElement>> {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 12"
            fill="none"
            height={".75rem"}
        >
            <path
                fillRule="evenodd"
                stroke="currentColor"
                strokeWidth="1.5"
                d="m1 1.1l23.8 9.7m-23.7 0.1l23.9-9.8"
            />
        </svg>
    );
}

export default function Navigation(): React.ReactElement {
    const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

    const currentPathname = usePathname();

    return (
        <header className="w-[calc(100vw-var(--scrollbar-width))] fixed top-0 left-0 text-lg">
            <div className="relative w-full">
                <div className="absolute right-5 top-5 md:right-10 md:top-10">
                    <button
                        onClick={() => {
                            setIsOpenNav(true);
                        }}
                    >
                        <HamburgerIcon />
                    </button>
                </div>
                <AnimatePresence>
                    {isOpenNav && (
                        <motion.nav
                            className="fixed left-0 top-0 w-full h-screen bg-custom-dark-gray"
                            initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                            exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
                            transition={{ duration: 0.8, ease: animationEase }}
                        >
                            <div className="h-full flex">
                                <div className="left-side flex-1 hidden md:block">
                                    <div className=""></div>
                                </div>
                                <div className="right-side flex flex-col flex-1 justify-end float-end md:me-10">
                                    <div className="head-side mt-5 md:mt-10 flex justify-end me-5 md:me-0">
                                        <div className="">
                                            <button
                                                onClick={() => {
                                                    setIsOpenNav(false);
                                                }}
                                            >
                                                <CloseIcon />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-5 h-full mb-5 mb:mb-5">
                                        <ul className="h-full flex flex-col nav-clamp justify-evenly">
                                            {nav.map((_nav, index) => {
                                                const isActive =
                                                    _nav.path ===
                                                    currentPathname;

                                                const color =
                                                    index == 0
                                                        ? "bg-custom-yellow"
                                                        : index == 1
                                                        ? "bg-custom-purple"
                                                        : "bg-custom-orange";

                                                return (
                                                    <li key={`nav-li-${index}`}>
                                                        <Link
                                                            key={`nav-link-${index}`}
                                                            className={`block text-center w-full p-5 outline outline-transparent outline-2 hover:outline-black ${
                                                                isActive
                                                                    ? `${color} !outline-black`
                                                                    : ``
                                                            } ${`hover:${color}`} transition-all duration-300`}
                                                            href={_nav.path}
                                                        >
                                                            {_nav.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
