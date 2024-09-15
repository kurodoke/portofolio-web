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
            <div className="hero grid text-[9vw] md:text-[5.97vw] grid-cols-12">
                <div className="col-start-5 md:col-start-6 -col-end-1">
                    <span>Arief Satrio is a</span>
                </div>
                <div className="col-start-1 md:col-start-3 -col-end-1">
                    <span>Fullstack Developer</span>
                </div>
                <div className="col-start-1 md:col-start-3 -col-end-1">
                    <span>and Graphic Designer</span>
                </div>
                <div className="col-start-5 md:col-start-6 -col-end-1">
                    <span>from Indonesia</span>
                </div>
                <div className="col-start-1 md:col-start-3 -col-end-1">
                    <span>based in Bengkulu</span>
                </div>
            </div>
        </main>
    );
}
