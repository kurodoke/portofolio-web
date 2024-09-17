import { cubicBezier } from "framer-motion";

export function getDelay(baseDelay: number, index: number): number {
    return baseDelay + index * 0.2;
}
export const aboutEase = cubicBezier(0.005, 0.88, 0.235, 0.985);
