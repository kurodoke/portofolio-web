"use client";

import { Line } from "@/components/line";
import { sairaB } from "@/font";
import React, { useState } from "react";

//svg
import { ReactComponent as AboutBarcode } from "@/assets/svg/barcode about.svg";
import { ReactComponent as WorksBarcode } from "@/assets/svg/barcode works.svg";
import { useParams, usePathname } from "next/navigation";

function getPage(pathname: string): string {
    if (pathname == "/") return "ABOUT";
    return pathname.split("/")[1].toLocaleUpperCase();
}

function getBarcodebyPage(
    pathname: string
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> {
    if (getPage(pathname) == "ABOUT") return AboutBarcode;
    return WorksBarcode;
}

export function Footer({
    classname,
}: {
    classname?: React.HTMLAttributes<string> | string;
}): React.ReactElement {
    const pathname: string = usePathname();
    const BarcodeComponent = getBarcodebyPage(pathname);

    return (
        <footer
            className={`${sairaB.className} flex flex-col justify-between gap-1 text-xs ${classname}`}
        >
            <div className="flex flex-col gap-[0.1rem] sm:gap-1">
                <Line />
                <Line />
            </div>
            <div className="flex justify-between">
                <h5 className="sm:text-2xl">
                    *THIS PORTOFOLIO PRESENTED BY KURODOKE.
                </h5>
                <div className="flex gap-1 sm:gap-2 items-start">
                    <div className="flex items-center bg-black text-white">
                        <h5 className="sm:text-2xl">{getPage(pathname)}</h5>
                    </div>
                    <div className="h-4 sm:h-8">
                        <BarcodeComponent height={"100%"} width={"100%"} />
                    </div>
                    <h5 className="sm:text-2xl">PAGE</h5>
                </div>
            </div>
        </footer>
    );
}
