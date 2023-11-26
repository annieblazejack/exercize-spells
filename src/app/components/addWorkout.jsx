'use client'
import addData from "@/firebase/firestore/addData";

import { useState } from "react";

export default function AddWorkout() {

const [ name, setName ] = useState("");
const [ house, setHouse ] = useState("");

  const handleForm = async () => {

    const data = {
      name: name,
      house: house,

    }
    const { result, error } = await addData('users', id, data);
    console.log(result);

    if (error) {
      return console.log(error)
    }
  }
  
  

  return (
    <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{color:"black"}}/>
        <input type="text" placeholder="House" value={house} onChange={(e) => setHouse(e.target.value)} style={{color:"black"}}/>
        <button type="submit" onClick={handleForm}>
            Add Data!
        </button>
    </div>
  )
};