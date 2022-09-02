/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/

function tripler(array) {
  // your code here...
  let threeTimes = [];
  for (let i = 0; i < array.length; i++) {
    threeTimes.push(array[i] * 3);
  }

  return threeTimes;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = tripler
