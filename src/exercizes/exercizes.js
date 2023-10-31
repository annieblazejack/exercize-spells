//create an alphabet object
const alphabet = {};

//create a Letter class
class Letter {
    constructor(letter, exercizeName, startingPosition, gifFile) {
        this.letter = letter;
        this.exercizeName = exercizeName;
        this.startingPosition = startingPosition;
        this.gifFile = gifFile;
    }
}

//add new Letter objects to the alphabet

alphabet.a = new Letter('a', 'Vinyasa', 'lying on belly', 'file');
alphabet.b = new Letter('b', 'Horse Kick', 'standing', 'file');
alphabet.c = new Letter('c', 'Hip Thrust', 'sitting', 'file');
alphabet.d = new Letter('d', 'Wonder Woman', 'lying on belly', 'file');
alphabet.e = new Letter('e', 'Squat', 'standing', 'file');
alphabet.f = new Letter('f', 'Eagle Flap', 'standing', 'file');
alphabet.g = new Letter('g', 'Calf Raise', 'standing', 'file');
alphabet.h = new Letter('h', 'Alternating Leg Lift', 'sitting', 'file');
alphabet.i = new Letter('i', 'Tae-Bo Knee Raise', 'standing', 'file');
alphabet.j = new Letter('j', 'Chair', 'standing', 'file');
alphabet.k = new Letter('k', 'Side Plank', 'lying on belly', 'file');
alphabet.l = new Letter('l', 'Split Squat', 'standing', 'file');
alphabet.m = new Letter('m', 'Dip', 'standing', 'file');
alphabet.n = new Letter('n', 'Mountain Climber', 'lying on belly', 'file');
alphabet.o = new Letter('o', 'Sumo Squat with Calf Raise', 'standing', 'file');
alphabet.p = new Letter('p', 'V-Pulse', 'sitting', 'file');
alphabet.q = new Letter('q', 'Side Kick', 'standing', 'file');
alphabet.r = new Letter('r', 'Reverse Crunch', 'sitting', 'file');
alphabet.s = new Letter('s', 'Pushup', 'lying on belly', 'file');
alphabet.t = new Letter('t', 'Burpee', 'standing', 'file');
alphabet.u = new Letter('u', 'Plank', 'lying on belly', 'file');
alphabet.v = new Letter('v', 'Russian Twist', 'sitting', 'file');
alphabet.w = new Letter('w', 'Speedbag', 'standing', 'file');
alphabet.x = new Letter('x', 'Sunflower', 'standing', 'file');
alphabet.y = new Letter('y', 'Double Punch', 'standing', 'file');
alphabet.z = new Letter('z', 'Front Kick', 'lying on belly', 'file');

//function to sort letters into a useful exercize order

function sortWorkout(string) {
  //create an array, make all the letters lower case
  const arr = string.split('');
  arr.forEach((char, index) => arr[index] = char.toLowerCase());

  //grab all the standing exercizes
  let standing = '';
  arr.forEach(char => {
    if (alphabet[char] && alphabet[char].startingPosition === 'standing') {
        standing += char;
    }
  })

  //grab all the sitting exercizes
  let sitting = '';
  arr.forEach(char => {
    if (alphabet[char] && alphabet[char].startingPosition === 'sitting') {
        sitting += char;
    }
  })

  //grab all the lying on belly exercizes
  let lyingOnBelly = '';
  arr.forEach(char => {
    if (alphabet[char] && alphabet[char].startingPosition === 'lying on belly') {
        lyingOnBelly += char;
    }
  })

  //concatenate those back into a string
  return standing.concat(sitting).concat(lyingOnBelly);
  //should I return an of gifFiles instead?
};

console.log(sortWorkout('Hi There How Are You?11!'));


