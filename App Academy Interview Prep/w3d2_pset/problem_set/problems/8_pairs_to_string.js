/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'

game plan:
received an array containing pairs of number,
create an empty array call finalWord,
loop through pairs of word,
 create another for loop to check the number of words,
push word to finalWord array according to number

outside the forloop return finaWord.join('')

***********************************************************************/

function pairsToString(arr) {
  let finalWord=[];
  for(let i of arr){
    for(let j =0;j<i[1];j++){
      finalWord.push(i[0])
    }
  }
  return finalWord.join('')
     
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairsToString;
