"use client";

import Hero from "@/components/About/Hero";
import Intro from "@/components/About/Intro";
import Portofolio from "@/components/About/Portofolio";
import React from "react";

export default function About(): React.ReactElement {
    return (
        <main>
            <Hero />
            <Intro />
            <Portofolio />
        </main>
    );
}
