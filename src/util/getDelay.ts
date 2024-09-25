export function getDelay(
    baseDelay: number,
    index: number,
    interval: number = 0.1
): number {
    return baseDelay + index * interval;
}
