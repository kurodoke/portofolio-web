import getFirestoreData from "@/util/getFirestoreData";
import { DeveloperProjectInterface } from "./project";

export async function GET(): Promise<Response> {
    try {
        const data = await getFirestoreData<DeveloperProjectInterface>(
            "projects"
        );
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
