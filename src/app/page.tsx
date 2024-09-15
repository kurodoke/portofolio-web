"use client";

import { EntryAnimation } from "@/components/entryAnimation";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { LogoAnimation } from "@/components/logoAnimation";
import { TextEntryAnimation } from "@/components/textEntryAnimation";
import { fontDisplay, fontSerif, fontText } from "@/font";
import React, { useEffect, useState } from "react";

export default function About(): React.ReactElement {
    return (
        <main>
            <div className="hero grid text-[8.765vw] md:text-[5.57vw] grid-cols-12">
                <div className="flex justify-end col-start-5 col-end-13 md:col-start-6 md:col-end-11">
                    <span>Arief Satrio is a</span>
                </div>
                <div className="flex justify-start col-start-1 col-end-12 md:col-start-3">
                    <span>Fullstack Developer</span>
                </div>
                <div className="flex justify-center col-start-1 md:col-start-3 -col-end-1 md:col-end-11">
                    <span>and Graphic Designer</span>
                </div>
                <div className="flex justify-end col-start-5 col-end-13 md:col-start-6 md:col-end-11">
                    <span>from Indonesia</span>
                </div>
                <div className="flex justify-start col-start-1 col-end-12 md:col-start-3">
                    <span>based in Bengkulu</span>
                </div>
            </div>
        </main>
    );
}
