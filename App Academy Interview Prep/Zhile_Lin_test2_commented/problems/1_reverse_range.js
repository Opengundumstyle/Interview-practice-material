// 5/10 specs passed
//
// Hey Brian, find my comments marked with `-DY`
// Nice job with most of these problems! Just a few things to fix
// Be sure to check out our solution videos and practice these problems.
//
/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  let reverseArr=[];

  for(let i=end-1;i>start;i--){

    reverseArr.push(i);
  }
  
  return reverseArr;
}

console.log(reverseRange(2, 7))
//nice solution! -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
