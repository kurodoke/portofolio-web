"use client";

import Footer from "@/components/page/Footer/Footer";
import ContentPoster from "@/components/page/Designer/ContentPoster";
import ContentSwitcher, {
    ContentSwitcherState,
} from "@/components/page/Designer/ContentSwitcher";
import Hero from "@/components/page/Designer/Hero";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContentMV from "@/components/page/Designer/ContentMV";
import ContentMoGraph from "@/components/page/Designer/ContentMoGraph";

export default function Designer(): React.ReactElement {
    const [content, setContent] = useState<ContentSwitcherState>("poster");

    return (
        <main>
            <div className="wrapper min-h-screen">
                <Hero />
                <ContentSwitcher state={content} setState={setContent} />
                <AnimatePresence mode="wait">
                    {content === "poster" && (
                        <ContentPoster key={"content-poster"} />
                    )}
                    {content === "mv" && <ContentMV key={"content-mv"} />}
                    {content === "mograph" && (
                        <ContentMoGraph key={"content-mograph"} />
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </main>
    );
}
