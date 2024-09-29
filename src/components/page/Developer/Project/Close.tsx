import { AnimatedLink } from "@/components/AnimatedLink";
import React from "react";

export default function Close(): React.ReactElement {
    return (
        <section className="p-5 md:p-10 !pt-0 text-base text-center">
            <AnimatedLink href={"/developer"} className="underline">
                (Get Back)
            </AnimatedLink>
        </section>
    );
}
