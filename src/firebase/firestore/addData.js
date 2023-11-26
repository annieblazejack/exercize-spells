import { getFirebase } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const db = getFirebase().firestore;

export default async function addData(collectionName, data) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, collectionName), data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}