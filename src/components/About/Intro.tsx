import { fontDisplay, fontDisplayItalic } from "@/font";
import Link from "next/link";
import React from "react";

export default function Intro(): React.ReactElement {
    return (
        <section className="intro p-5 md:p-10 bg-custom-yellow border-y-2 border-black">
            <div className="grid grid-cols-6 gap-y-5 md:gap-x-10 md:grid-cols-12 text-base md:text-xl">
                <div className="col-span-6 md:col-span-3 text-2xl md:text-xl">
                    .0A
                </div>
                <div className="col-span-6 md:col-span-9">
                    <div className="grid md:grid-cols-9 grid-cols-6 gap-y-5 md:gap-x-10 md:gap-y-5">
                        <div className="hidden col-span-9 md:block">
                            <h2
                                className={`${fontDisplay.className} md:text-5xl lg:text-7xl`}
                            >
                                Where Creativity Meets Technical Expertise
                            </h2>
                        </div>

                        <div className="block leading-none col-span-9 md:hidden text-[10.572vw]">
                            <h2 className={`${fontDisplay.className}`}>
                                Where Creativity
                            </h2>
                            <h2 className={`${fontDisplay.className}`}>
                                Meets Technical
                            </h2>
                            <h2 className={`${fontDisplay.className}`}>
                                Expertise
                            </h2>
                        </div>
                        <span
                            className={`${fontDisplayItalic.className} col-span-6 md:col-span-3 text-xl md:text-2xl underline`}
                        >
                            intro
                        </span>
                        <div className="col-span-6 md:col-span-4 flex-col flex gap-2 md:text-base">
                            <p>About.</p>
                            <p>
                                Arief is a full-stack developer and graphic
                                designer who combines artistic vision with
                                technical skill. His love for design shows in
                                his bold typography and interest in brutalism,
                                always pushing the limits of visual style.
                            </p>
                            <p>
                                Arief is committed to using his skills to create
                                meaningful solutions in the industry. He enjoys
                                working with talented people and using his
                                expertise to drive innovation and quality in
                                every project. Feel free to connect with him at{" "}
                                <Link
                                    className="underline underline-offset-1"
                                    href={"mailto:ariefsatrio098@gmail.com"}
                                >
                                    ariefsatrio098@gmail.com.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
