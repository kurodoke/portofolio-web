import AnimatedText from "@/components/AnimatedText";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function EndContent(): React.ReactElement {
    return (
        <AnimatePresence>
            <div className="overflow-hidden m-5 md:m-10 !mb-0">
                <AnimatedText
                    scroll={true}
                    type="italic"
                    duration={1.5}
                    className="justify-center text-lg md:text-xl leading-none"
                >
                    You see the End...
                </AnimatedText>
            </div>
        </AnimatePresence>
    );
}
