'use client';
import addData from '@/firebase/firestore/addData';
import { useState } from 'react';

const positions = ['standing', 'sitting', 'lying on belly'];

export default function AddExercise() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startingPosition, setStartingPosition] = useState(positions[0]);

  const handleForm = async () => {
    const data = {
      name,
      startingPosition,
      description,
    };
    const { result, error } = await addData('exercises', data);
    console.log(result);

    if (error) {
      return console.log(error);
    }

    setName('');
    setDescription('');
    setStartingPosition(positions[0]);
  };

  const fieldsAreValid = name !== '';

  //name: required string
  //starting position: dropdown
  //description: optional string
  //gifUrl: optional url

  // const exercise = {
  //   id: "some_exercise_id",
  //   name: "Push ups",
  //   startingPosition: "On belly",
  //   description: "push with your hands off of the floor",
  //   gifUrl: "some.gif",
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={startingPosition}
        onChange={(e) => setStartingPosition(e.target.value)}
      >
        {positions.map((position) => (
          <option key={position} value={position}>
            {position[0].toUpperCase().concat(position.slice(1))}
          </option>
        ))}
      </select>
      <button
        disabled={!fieldsAreValid}
        onClick={handleForm}
        className={`${fieldsAreValid ? 'bg-blue-900' : 'bg-blue-200'}`}
      >
        Add Exercise!
      </button>
    </div>
  );
}
