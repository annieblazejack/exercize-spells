import { getFirebase } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const db = getFirebase().firestore;

export default async function addData(collection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}