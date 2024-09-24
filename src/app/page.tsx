"use client";

import Footer from "@/components/page/About/Footer";
import Hero from "@/components/page/About/Hero";
import Intro from "@/components/page/About/Intro";
import Portofolio from "@/components/page/About/Portofolio";
import React from "react";

export default function About(): React.ReactElement {
    return (
        <main>
            <Hero />
            <Intro />
            <Portofolio />
            <Footer />
        </main>
    );
}
