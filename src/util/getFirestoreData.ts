import {
    cert,
    getApps,
    initializeApp,
    ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "@/config/portfolio-krk-firebase-adminsdk.json";

type collectionNameProps = "projects" | "posters" | "musicvideos" | "mographs";

if (!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
    });
}

const db = getFirestore();

export default async function getFirestoreData<T>(
    collectionName: collectionNameProps
) {
    const snapshot = await db.collection(collectionName).get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data as Array<T>;
}
