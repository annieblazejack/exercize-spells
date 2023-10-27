'use client'
import getDocuments from "@/firebase/firestore/getCollection";
import { useState, useEffect } from "react";
import subscribeToCollection from "@/firebase/firestore/subscribeToCollection";

export default function GetData() {

    const [docs, setDocs] = useState([]);

    const handleForm = async () => {
      const result = await getDocuments('users');
      setDocs(result);
    };
    
    // useEffect(() => {handleForm()}, []);

    useEffect(() => {subscribeToCollection('users', (snapshot) => {setDocs(snapshot)})}, []);

    return (
        <div>

             <ul>
                {docs.map((doc) => {
                    console.log(doc);
                    return(
                        <li key={doc.id}>
                            {doc.data().name} of house {doc.data().house}
                        </li>
                    )
                })}
             </ul>
        </div>
        
    )
  };