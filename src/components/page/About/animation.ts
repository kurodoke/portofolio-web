import { cubicBezier } from "framer-motion";

export function getDelay(baseDelay: number, index: number): number {
    return baseDelay + index * 0.1;
}
export const aboutEase = cubicBezier(0.075, 0.82, 0.165, 1);
