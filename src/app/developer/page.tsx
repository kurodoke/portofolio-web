"use client";

import Hero from "@/components/page/Developer/Hero";
import ListProject from "@/components/page/Developer/ListProject";
import Footer from "@/components/page/Footer/Footer";
import React from "react";

export default function Developer(): React.ReactElement {
    return (
        <main>
            <div className="wrapper min-h-screen">
                <Hero />
                <ListProject />
            </div>
            <Footer />
        </main>
    );
}
