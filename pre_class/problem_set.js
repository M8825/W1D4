function logEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i])
  }
}

logEach(["Anthony", "John", "Carson"]);
console.log('////////')

function range(start, end) {
  let rang = [];
  for (let i = start; i <= end; i++){
    rang.push(i);
  }

  return rang;
}

console.log(range(1,4)); // => [1,2,3,4]
console.log(range(4,2)); // => []

console.log('///////')
function sumArray(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

function capWords(arr) {
  let capitalized = [];
  for (let i = 0; i < arr.length; i++) {
    capitalized.push(arr[i].toUpperCase())
  }

  return capitalized;
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function wordPeriods(sentence) {
  return sentence.split(' ').join('. ') + '.';
}

console.log(wordPeriods('hello world')); // => 'hello. world.'
console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'


console.log('////////')
function maxValue(arr) {
  if (arr.length === 0) {
    return null;
  }
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }

  return largest;
}

console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43

console.log('//////')
function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }

  return -1;
}


console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1

console.log('//////')
function factorArray(array, number) {
  let factors = [];
  let i = 0;

  while (i < array.length) {
    if (number % array[i] === 0) {
      factors.push(array[i]);
    }
    i++;
  }

  return factors;
}

console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []








