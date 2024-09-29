import { fontDisplay } from "@/font";
import Image from "next/image";
import React, { useState } from "react";

import AnimatedPortofolioFigure from "./AnimatedPortofolioFigure";
import AnimatedPortofolioButton from "./AnimatedPortofolioButton";
import AnimatedPortofolioText from "./AnimatedPortofolioText";
import { AnimatedLink } from "../../AnimatedLink";
import useStorage from "@/app/hooks/useStorage";

type SelectedPortofolio = "fullstack" | "designer";

export default function Portofolio(): React.ReactElement {
    const [selectedPortofolio, setSelectedPortofolio] =
        useState<SelectedPortofolio>("fullstack");

    const image = useStorage() + "image/";

    return (
        <section className="p-5 md:p-10">
            <div className="grid grid-cols-6 gap-y-5 md:gap-x-10 md:grid-cols-12 text-base">
                <div className="col-span-6 md:col-span-12 text-2xl md:text-xl">
                    .0B
                </div>
                <div className="col-span-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-2 text-xl">
                        <h5>See his Portofolio</h5>
                        <ul
                            className={`text-6xl md:text-[5.436vw] leading-none ${fontDisplay.className} flex flex-col gap-5`}
                        >
                            <li>
                                <AnimatedPortofolioButton
                                    onClick={() => {
                                        if (selectedPortofolio !== "fullstack")
                                            setSelectedPortofolio("fullstack");
                                    }}
                                    className={`${
                                        selectedPortofolio === "fullstack"
                                            ? "is-active"
                                            : ""
                                    } before:h-1 md:before:bottom-[-0.5rem]`}
                                >
                                    <h1 className="flex">
                                        Fullstack
                                        <div className="ms-4 text-2xl">.01</div>
                                    </h1>
                                    <h1>Developer</h1>
                                </AnimatedPortofolioButton>
                            </li>
                            <li>
                                <AnimatedPortofolioButton
                                    onClick={() => {
                                        if (selectedPortofolio !== "designer")
                                            setSelectedPortofolio("designer");
                                    }}
                                    className={`${
                                        selectedPortofolio === "designer"
                                            ? "is-active"
                                            : ""
                                    } before:h-1 md:before:bottom-[-0.5rem]`}
                                >
                                    <h1 className="flex">
                                        Graphic
                                        <div className="ms-4 text-2xl">.02</div>
                                    </h1>
                                    <h1>Designer</h1>
                                </AnimatedPortofolioButton>
                            </li>
                        </ul>
                    </div>
                    <div className="md:grid hidden justify-self-end overflow-hidden grid-cols-6 gap-x-10">
                        {selectedPortofolio == "fullstack" ? (
                            <AnimatedPortofolioText
                                _key="text-fullstack"
                                className="col-span-6 lg:col-span-4"
                            >
                                The excellence of coffee is that it fuels Arief
                                to build amazing projects as a full-stack
                                developer. It drastically drives his creativity.{" "}
                                <AnimatedLink
                                    href={"/developer"}
                                    className="underline"
                                >
                                    See his project here
                                </AnimatedLink>
                            </AnimatedPortofolioText>
                        ) : (
                            <AnimatedPortofolioText
                                _key="text-designer"
                                className="col-span-6 lg:col-span-4"
                            >
                                Visual confusion is part of Arief's process as a
                                graphic designer. It happens when he's designing
                                something, but he tackles it and turns it into
                                an interesting design.{" "}
                                <AnimatedLink
                                    href={"/designer"}
                                    className="underline"
                                >
                                    See his design here
                                </AnimatedLink>
                            </AnimatedPortofolioText>
                        )}
                    </div>
                </div>
                <div className="col-span-6 border-2 border-black relative overflow-hidden">
                    {selectedPortofolio == "fullstack" ? (
                        <AnimatedPortofolioFigure _key="poster-coffee-addict">
                            <Image
                                loading="eager"
                                src={image + "coffee-addict.jpg"}
                                alt="poster-coffee-addict"
                                width={720}
                                height={650}
                            />
                        </AnimatedPortofolioFigure>
                    ) : (
                        <AnimatedPortofolioFigure _key="poster-visually-bright">
                            <Image
                                loading="eager"
                                src={image + "visually-bright.jpg"}
                                alt="poster-visually-bright"
                                width={720}
                                height={650}
                            />
                        </AnimatedPortofolioFigure>
                    )}
                </div>
                <div className="col-span-6">
                    <div className="grid md:hidden overflow-hidden grid-cols-6 gap-y-5">
                        {selectedPortofolio == "fullstack" ? (
                            <AnimatedPortofolioText
                                _key="text-fullstack"
                                className="col-span-6 lg:col-span-4"
                            >
                                The excellence of coffee is that it fuels Arief
                                to build amazing projects as a full-stack
                                developer. It drastically drives his creativity.{" "}
                                <AnimatedLink
                                    href={"/developer"}
                                    className="underline"
                                >
                                    See his project here
                                </AnimatedLink>
                            </AnimatedPortofolioText>
                        ) : (
                            <AnimatedPortofolioText
                                _key="text-designer"
                                className="col-span-6 lg:col-span-4"
                            >
                                Visual confusion is part of Arief's process as a
                                graphic designer. It happens when he's designing
                                something, but he tackles it and turns it into
                                an interesting design.{" "}
                                <AnimatedLink
                                    href={"/designer"}
                                    className="underline"
                                >
                                    See his design here
                                </AnimatedLink>
                            </AnimatedPortofolioText>
                        )}
                    </div>
                </div>
                <div className="col-span-6 md:col-span-12 pb-8 md:pb-7"></div>
            </div>
        </section>
    );
}
