import GetData from './components/getData';
import AddAlphabet from './components/addAlphabet';
import AddExercise from './components/addExercise';
import AddWorkout from './components/addWorkout';

export default function Home() {
  return (
    <main className="w-full m-12">
      <Section sectionName="Add Workout">
        <AddWorkout />
        <GetData collectionName={'workouts'} />
      </Section>
      <Section sectionName="Add Alphabet">
        <AddAlphabet />
        <GetData collectionName={'alphabets'} />
      </Section>
      <Section sectionName="Add Exercise">
        <AddExercise />
        <GetData collectionName={'exercises'} />
      </Section>
    </main>
  );
}

function Section({ sectionName, children }) {
  return (
    <div className="my-8">
      <h1 className="text-lg">{sectionName}</h1>
      {children}
    </div>
  );
}
