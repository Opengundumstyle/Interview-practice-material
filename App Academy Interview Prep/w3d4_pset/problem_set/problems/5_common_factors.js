/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]

game-plan:
  receive two ints, num1 & num2;
  create an int name n with value 1;
  create an empty array;
  Set while loop, at condition number n=<num1 && n=<num2
    if n is divisible by both num1 and num2, store n into array, increment n by 1

  after the loop break return array
   
  

***********************************************************************/

function commonFactors(num1, num2) {
    let n=1;
    let commArr=[];
    while(n<=num1&&n<=num2){
        if(num1%n===0&&num2%n===0){
        commArr.push(n)
        n++;
        }
    }
    return commArr;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonFactors;
