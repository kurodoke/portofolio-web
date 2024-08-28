import { Line } from "@/components/line";
import { sairaB } from "@/font";
import React, { useState } from "react";

//svg
import { ReactComponent as AboutBarcode } from "@/assets/svg/barcode about.svg";
import { ReactComponent as WorksBarcode } from "@/assets/svg/barcode works.svg";

export function Footer(): React.ReactElement {
    return (
        <footer
            className={`${sairaB.className} flex flex-col justify-between gap-1 text-base`}
        >
            <div className="flex flex-col gap-[0.1rem] md:gap-1">
                <Line />
                <Line />
            </div>
            <div className="flex justify-between">
                <h5 className="md:text-3xl">
                    *THIS PORTOFOLIO PRESENTED BY KURODOKE.
                </h5>
                <div className="flex gap-1 md:gap-2">
                    <div className="flex items-center bg-black text-white">
                        <h5 className="md:text-3xl">ABOUT</h5>
                    </div>
                    <div className="h-6 md:h-12">
                        <AboutBarcode height={"auto"} width={"auto"} />
                    </div>
                    <h5 className="md:text-5xl">PAGE</h5>
                </div>
            </div>
        </footer>
    );
}
