import React from "react";
import { navItems } from "../navItems";
import { usePathname } from "next/navigation";
import CloseIcon from "../icons/CloseIcon";
import { useNavigationStore } from "@/providers/navigationProvider";
import { fontDisplay } from "@/font";
import { AnimatedLink } from "@/components/AnimatedLink";

export default function RightSide(): React.ReactElement {
    const { setIsNavOpen, setIsHovered, setWhichItemHovered } =
        useNavigationStore();

    const currentPathname = usePathname();

    return (
        <div className="right-side flex flex-col flex-1 justify-end float-end md:mx-10 py-5 md:py-10">
            <div className="head flex justify-between mx-5 md:me-0">
                <p>menu</p>
                <button
                    onClick={() => {
                        setIsNavOpen(false);
                    }}
                >
                    <CloseIcon />
                </button>
            </div>

            <div className="body p-5 h-full">
                <ul className="h-full flex flex-col nav-clamp gap-8 md:gap-0 md:justify-evenly">
                    {navItems.map((item, index) => {
                        const isActive = item.path === currentPathname;

                        return (
                            <li key={`nav-li-${index}`}>
                                <AnimatedLink
                                    onMouseEnter={() => {
                                        setIsHovered(true);
                                        setWhichItemHovered(item);
                                    }}
                                    onMouseLeave={() => {
                                        setIsHovered(false);
                                        setWhichItemHovered(null);
                                    }}
                                    key={`nav-link-${index}`}
                                    preventClick={isActive}
                                    className={`${
                                        fontDisplay.className
                                    } block text-center md:w-full p-2 outline outline-transparent outline-2 hover:outline-black ${
                                        isActive
                                            ? `${item.color} !outline-black`
                                            : ``
                                    } ${
                                        `hover:` + item.color
                                    } transition-all duration-300`}
                                    href={item.path}
                                >
                                    <p className="whitespace-pre-line leading-none">
                                        {item.name}
                                    </p>
                                </AnimatedLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
