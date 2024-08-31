"use client";

import { fontDisplay, fontSerif, fontText } from "@/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "@/assets/svg/logo.svg";
import { LogoAnimation } from "../logoAnimation";
import { EntryAnimation } from "../entryAnimation";

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

    return (
        <header className={`${classname} select-none text-lg`}>
            <nav className="flex items-center justify-end">
                <div className={`flex gap-2`}>
                    {nav.map((_nav: PageObject, index: number) => {
                        return (
                            <div
                                className=" flex items-center gap-2"
                                key={"navigation" + index}
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
                                            ? "pointer-events-none text-whiteDisable"
                                            : "hover:text-slate-700"
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
                            </div>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
