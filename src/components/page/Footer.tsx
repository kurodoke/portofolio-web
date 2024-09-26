import React from "react";
import Arief from "../Logo/Letter/Arief";
import Satrio from "../Logo/Letter/Satrio";
import Link from "next/link";
import { fontDisplay } from "@/font";
import { AnimatedLink } from "../AnimatedLink";

export default function Footer(): React.ReactElement {
    return (
        <footer className="p-5 md:p-10 bg-custom-orange border-t-2 border-black">
            <div className="grid grid-cols-6 gap-y-5 gap-x-5 md:gap-x-10 md:gap-y-5 md:grid-cols-12">
                <div className="col-span-6 md:col-span-12 flex justify-center">
                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        ↑ Back to top
                    </button>
                </div>
                <div className="col-span-3 md:col-span-4 flex flex-col justify-between md:block">
                    <div className="w-3/4 md:w-2/4">
                        <Arief className="" />
                        <Satrio className="" />
                    </div>
                    <p className="mt-2">Copyright © AriefSatrio 2024</p>
                </div>

                <div className="col-span-3 md:col-span-8 grid grid-cols-3 md:grid-cols-8 gap-y-5 md:gap-x-10 md:gap-y-5">
                    <div className="col-span-3 md:col-start-3 flex flex-col justify-end">
                        <h5
                            className={`${fontDisplay.className} text-base md:text-lg`}
                        >
                            Catch him in other platform
                        </h5>
                        <p className="text-sm md:text-base">
                            <AnimatedLink
                                href={
                                    "https://www.linkedin.com/in/arief-satrio-budi-prasojo"
                                }
                            >
                                Linkedln
                            </AnimatedLink>{" "}
                            /{" "}
                            <AnimatedLink href={"https://github.com/kurodoke"}>
                                Github
                            </AnimatedLink>
                        </p>
                    </div>
                    <div className="col-span-3 md:col-start-7 flex flex-col justify-end">
                        <h5
                            className={`${fontDisplay.className} text-base md:text-lg`}
                        >
                            Email
                        </h5>
                        <AnimatedLink
                            className="text-sm md:text-base"
                            href={"mailto:ariefsatrio098@gmail.com"}
                        >
                            ariefsatrio098@gmail.com.
                        </AnimatedLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
