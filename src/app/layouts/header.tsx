import React from "react";
import { sairaB } from "../../font";
import { Line } from "../../components/line";

export function Header(): React.ReactElement {
    return (
        <header className="flex flex-col gap-1">
            <div className="flex justify-between items-end">
                <h1 className={`${sairaB.className} text-4xl md:text-6xl`}>
                    PORTOFOLIO.
                </h1>

                <nav className="flex text-2xl md:text-4xl gap-1 md:gap-4">
                    <a href="about" className={sairaB.className}>
                        ABOUT
                    </a>
                    <a href="works" className={sairaB.className}>
                        WORKS
                    </a>
                </nav>
            </div>
            <div className="flex flex-col gap-[0.1rem] md:gap-1">
                <Line />
                <Line />
            </div>
        </header>
    );
}
