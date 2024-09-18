import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";

// export const fontText = localFont({
//     src: "OverusedGroteskRoman-VF.ttf",
//     weight: "500",
// });
// export const fontDisplay = localFont({
//     src: "OverusedGroteskRoman-VF.ttf",
//     weight: "700",
// });
// export const fontSerif = localFont({
//     src: "MulatAddis-Regular.ttf",
//     weight: "500",
// });

export const fontText = Inter_Tight({
    weight: "500",
    subsets: ["latin"],
});

export const fontDisplay = localFont({
    src: "PPMori-SemiBold.otf",
    weight: "700",
});
export const fontDisplayItalic = localFont({
    src: "PPMori-RegularItalic.otf",
    weight: "700",
});

export const fontSerif = localFont({
    src: "MulatAddis-Regular.ttf",
    weight: "500",
});
