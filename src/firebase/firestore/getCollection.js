import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirebase } from "../firebase";

const db = getFirebase().firestore;

export default async function getDocuments(coll) {
    const q = query(collection(db, coll));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs;
}









