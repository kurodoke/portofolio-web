import React from "react";
import { sairaB } from "../../font";
import { Line } from "../line";
import Link from "next/link";

export function Header({
    classname,
}: {
    classname?: React.HTMLAttributes<string> | string;
}): React.ReactElement {
    return (
        <header className={`flex flex-col gap-1 ${classname}`}>
            <div className="flex justify-between items-end">
                <h1 className={`${sairaB.className} text-4xl sm:text-6xl`}>
                    PORTOFOLIO.
                </h1>

                <nav className="flex text-2xl sm:text-4xl gap-1 sm:gap-4">
                    <Link href="/" className={sairaB.className}>
                        ABOUT
                    </Link>
                    <Link href="/works" className={sairaB.className}>
                        WORKS
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-[0.1rem] sm:gap-1">
                <Line />
                <Line />
            </div>
        </header>
    );
}
