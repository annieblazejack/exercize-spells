'use client';
import { useState, useEffect } from 'react';
import subscribeToCollection from '@/firebase/firestore/subscribeToCollection';
import { deleteDoc, doc } from 'firebase/firestore';
import { getFirebase } from '@/firebase/firebase';
import Button from './button';

const db = getFirebase().firestore;

export default function GetData({ collectionName }) {
  const [docs, setDocs] = useState([]);

  //subscribes to users collection, sets state whenever collection changes
  useEffect(() => {
    subscribeToCollection(collectionName, (snapshot) => {
      setDocs(
        snapshot.map((x) => {
          return {
            id: x.id,
            ...x.data(),
          };
        })
      );
    });
  }, []);

  return (
    <div>
      <ul>
        {docs.map((d) => {
          console.log(d);
          return (
            <li key={d.id}>
              {JSON.stringify(d)}
              <Button
                onClick={async () => {
                  const err = await deleteDoc(doc(db, collectionName, d.id));
                  if (err) console.log(err);
                }}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
