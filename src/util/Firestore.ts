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

/**
 * get all data from collection
 * @param collectionName collection name in firestore
 * @returns array of field data
 */
export default async function getFirestoreData<T>(
    collectionName: collectionNameProps
) {
    const snapshot = await db.collection(collectionName).get();
    const data = snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });
    return data as Array<T>;
}

/**
 * get specified data by id
 * @param collectionName collection name in firestore
 * @param id document id
 * @returns field data
 */
export async function getFirestoreDataByID<T>(
    collectionName: collectionNameProps,
    id: string
) {
    const snapshot = await db.collection(collectionName).doc(id).get();

    if (snapshot) {
        return { id: snapshot.id, ...snapshot.data() } as T;
    }
    return null;
}
