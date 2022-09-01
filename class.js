function logEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i]);
  }
}

logEach(["Anthony", "John", "Carson"]); // prints


console.log('//////')

function range(start, end) {
  let arrRange = [];
  for (let i = start; i <= end; i++) {
    arrRange.push(i);
  }
  
  return arrRange;
}

console.log(range(1,4)); // => [1,2,3,4]
console.log(range(4,2)); // => []


console.log('/////')
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Examples:
//
console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

console.log('////////');

function capWords(words) {
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    capitalized.push(words[i].toUpperCase());
  }

  return capitalized;
}

// Example:
//
console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']


console.log('//////');
function wordPeriods(sentence) {
  return sentence.split(' ').join('. ') + '.';
}


// Examples:
//
console.log(wordPeriods('hello world')); // => 'hello. world.'
console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'


console.log('//////')
function maxValue(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest
}

// Examples:
//
console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43

console.log('//////')
function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

// Examples:
//
console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1


console.log('/////')
function factorArray(array, number) {
  let factors = [];
  for (let i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      factors.push(array[i]);
    }
  }

  return factors;
}



// Examples:
//
console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)); // => [5]
console.log(factorArray([10,15,20,25],5)); // => []

