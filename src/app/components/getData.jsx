'use client'
import { useState, useEffect } from "react";
import subscribeToCollection from "@/firebase/firestore/subscribeToCollection";

export default function GetData( { collectionName }) {

    const [docs, setDocs] = useState([]);

    //subscribes to users collection, sets state whenever collection changes 
    useEffect(() => {
        subscribeToCollection(collectionName, (snapshot) => {
            setDocs(snapshot.map(x => {
                return {
                    id: x.id,
                    ... x.data()
                }
            }))
        });
    }, []);

    return (
        <div>

             <ul>
                {docs.map((doc) => {
                    console.log(doc);
                    return(
                        <li key={doc.id}>
                            {JSON.stringify(doc)}
                        </li>
                    )
                })}
             </ul>
        </div>
        
    )
  };