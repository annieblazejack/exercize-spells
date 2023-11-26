import GetData from './components/getData';
import AddAlphabet from './components/addAlphabet';
import AddExercise from './components/addExercise';
import AddWorkout from './components/addWorkout';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
    <h1>Add Workout</h1>
    <AddWorkout />
    <GetData collectionName={'workouts'} />
    <h1>Add Alphabet</h1>
    <AddAlphabet />
    <GetData collectionName={'alphabets'} />
    <h1>Add Exercise</h1>
    <AddExercise />
    <GetData collectionName={'exercises'} />
    </main>
  )
}
