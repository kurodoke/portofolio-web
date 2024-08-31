import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const fontText = localFont({
    src: "OverusedGroteskRoman-VF.ttf",
    weight: "400",
});
export const fontDisplay = localFont({
    src: "OverusedGroteskRoman-VF.ttf",
    weight: "700",
});
export const fontSerif = EB_Garamond({
    weight: "500",
    subsets: ["latin"],
});
