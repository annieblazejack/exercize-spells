'use client';
import addData from '@/firebase/firestore/addData';
import Button from './button';
import { useState, useEffect } from 'react';
import subscribeToCollection from '@/firebase/firestore/subscribeToCollection';
import { getFirebase } from '@/firebase/firebase';

const db = getFirebase().firestore;

//const alphabet = {
//     id: "some_alphabet_id",
//     name: "Gentle on your joints",

//     a: "exercise_unique_id_1",
//     b: "exercise_unique_id_2",
//     /** and so on */
//   };

//create an array with all the letters inside of it
function buildAlphabet() {
  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

const defaultAlphabet = {};
buildAlphabet().forEach(
  (letter) => (defaultAlphabet[letter] = '9ICaleIcgpmhSh6Kfral')
);

export default function AddAlphabet() {
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(
    exercises[0]?.id ?? ''
  );
  const [name, setName] = useState('');
  const [newAlphabet, setNewAlphabet] = useState({});
  const [currentLetter, setCurrentLetter] = useState('a');

  //subscribes to users collection, sets state whenever collection changes
  useEffect(() => {
    subscribeToCollection('exercises', (snapshot) => {
      setExercises(
        snapshot.map((x) => {
          return {
            id: x.id,
            ...x.data(),
          };
        })
      );
      setCurrentExercise(snapshot[0].id);
    });
  }, []);

  const handleForm = async () => {
    const data = {
      name,
      letters: { ...defaultAlphabet, ...newAlphabet },
    };
    const { result, error } = await addData('alphabets', data);
    console.log(result);

    if (error) {
      return console.log(error);
    }

    setName('');
    setNewAlphabet({});
  };

  const handleAddLetter = () => {
    const letter = currentLetter;
    const exercise = currentExercise;
    console.log(letter, exercise);
    setNewAlphabet({ ...newAlphabet, [letter]: exercise });
    setCurrentLetter('a'); //todo: add cool logic to move to next letter
    setCurrentExercise(exercises[0].id);
  };

  //get exercises from db, iterate through list of exercises and add each as a select option

  return (
    <div>
      <h2>A New Alphabet!</h2>
      <input
        type="text"
        placeholder="Alphabet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <h3>Add A Letter</h3>
        <select
          value={currentLetter}
          onChange={(e) => setCurrentLetter(e.target.value)}
        >
          {buildAlphabet().map((char) => (
            <option key={char} value={char}>
              {char}
            </option>
          ))}
        </select>
        <select
          value={currentExercise}
          onChange={(e) => setCurrentExercise(e.target.value)}
        >
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.name}
            </option>
          ))}
        </select>
        <Button onClick={handleAddLetter}>
          Add a Letter to your Alphabet!
        </Button>
      </div>

      <table>
        <tbody>
          {Object.keys(newAlphabet).map((char) => {
            return (
              <tr key={char}>
                <td>{char}</td>
                <td>
                  {exercises.find(
                    (exercise) => exercise.id === newAlphabet[char]
                  )?.name ?? 'foo'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Button onClick={handleForm}>Submit Alphabet!</Button>
    </div>
  );
}
