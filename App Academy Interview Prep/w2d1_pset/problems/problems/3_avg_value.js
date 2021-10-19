/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
     result=0;
    for(let i of array){
      result+=i;
    }
    return result/array.length

}

console.log(avgValue([2, 3, 7]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
