"use client";

import ContentSwitcher, {
    ContentSwitcherState,
} from "@/components/page/Designer/ContentSwitcher";
import Hero from "@/components/page/Designer/Hero";
import React, { useState } from "react";

export default function Designer(): React.ReactElement {
    const [content, setContent] = useState<ContentSwitcherState>("poster");

    return (
        <main>
            <Hero />
            <ContentSwitcher state={content} setState={setContent} />
        </main>
    );
}
