// 6/7 specs passed
//
// Hey Brian, find my comments marked with `-DY`
// Nice job with these problems!
// Be sure to check out our solution videos and practice these problems.
//
/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

function myIndexOf(array, ele){
  
      return array.indexOf(ele)

}
// Nice concise solution! -DY
console.log(myIndexOf([1,2,3,4,5], 5))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
