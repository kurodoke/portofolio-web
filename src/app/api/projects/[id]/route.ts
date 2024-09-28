import { getFirestoreDataByID } from "@/util/Firestore";
import { DeveloperProjectInterface } from "../project";

export async function GET(
    req: Request,
    { params: { id } }: { params: { id: string } }
) {
    try {
        const data = await getFirestoreDataByID<DeveloperProjectInterface>(
            "projects",
            id
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
