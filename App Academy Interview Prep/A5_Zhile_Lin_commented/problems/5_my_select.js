/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]

game plan:
receive


*******************************************************************************/

function mySelect(arr, cb) {
  let trueArr=[];
  for(let i=0;i< arr.length;i++){
    if(cb(arr[i],i,arr)){
        trueArr.push(arr[i])
    }
  }
  return trueArr;
}
//Try to space out the code more. Good job on the solution though! -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mySelect;
