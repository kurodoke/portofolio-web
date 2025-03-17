export default function useStorage(type: "poster" | "project"): string {
    return `https://samcnw0ebjxp2rx0.public.blob.vercel-storage.com/${type}/`;
}
