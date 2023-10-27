'use client'
import addData from "@/firebase/firestore/addData";
import { nanoid } from 'nanoid'

export default function AddData() {

  const handleForm = async () => {
    const id = nanoid();
    const data = {
      name: document.getElementById('name').value,
      house: document.getElementById('house').value,
      id: id
    }
    const { result, error } = await addData('users', id, data);
    console.log(result);

    if (error) {
      return console.log(error)
    }
  }
  
  

  return (
    <div>
          <input id="name" type="text" placeholder="Data" style={{color:"black"}}/>
          <input id="house" type="text" placeholder="Data" style={{color:"black"}}/>
          <button type="submit" onClick={() => handleForm()}>
            Add Data!
          </button>
        </div>
  )
};