import { getFirebase } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const db = getFirebase().firestore;

export default async function getDocument(collection, id) {
    const docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
