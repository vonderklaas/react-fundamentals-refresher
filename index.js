// Array Destructuring + Sread Operator
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

const [a, b, ...restOfAlphabet] = alphabet;
console.log(a, b, restOfAlphabet);

const newArr = [...alphabet, ...numbers];
console.log(newArr);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multply, division = 'No division'] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multply);
console.log(division);

// Object Destructuring
const personOne = {
  name: 'Nick',
  age: 24,
  favoriteFood: 'Watermelon',
  address: {
    city: 'Chisinau',
    state: 'Chisinau',
  },
};
const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Bucuresti',
    state: 'Bucuresi',
  },
};

const personThree = {
  name: 'John',
  worth: 40,
};

const personFour = { ...personOne, ...personThree };
console.log(personFour);

const {
  name: firstName,
  age,
  address: { state },
} = personTwo;
console.log(firstName, age, state);

const { name, ...restOfProperties } = personOne;
console.log(restOfProperties);

function printUser({ name, age }) {
  console.log(`Name is ${name}, age is ${age}`);
}

printUser(personOne);
