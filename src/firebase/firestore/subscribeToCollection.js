import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getFirebase } from "../firebase";

const db = getFirebase().firestore;

export default function subscribeToCollection(coll, cb) {
    const q = query(collection(db, coll));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        cb(querySnapshot.docs);
    });

    return unsubscribe;
}





