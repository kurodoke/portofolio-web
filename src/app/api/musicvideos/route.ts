import getFirestoreData from "@/util/getFirestoreData";
import { DesignerMVInterface } from "./musicvideo";

export async function GET(): Promise<Response> {
    try {
        const data = await getFirestoreData<DesignerMVInterface>("musicvideos");
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
