/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]

game plan:
2 helper functions:
isPrime();
isDivisible()
loop from 0 to num1&num2

***********************************************************************/

function commonPrimeFactors(num1, num2) {
   let CommArr=[];
   for(let i =2;i<=num1&&i<=num2;i++){
      if(isPrime(i)&&isDivisible(num1,num2,i)){
          CommArr.push(i)
      }
   }
  
  return CommArr;
}

function isPrime(givenNum){

    if(givenNum<2){
        return false;
    }
    for(let i=2;i<givenNum;i++){
       if(givenNum%i===0){
           return false
       }
    }
    return true;
}


function isDivisible(num1,num2,prime){
    if(num1%prime===0&&num2%prime===0){
        return true
    }

}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonPrimeFactors;
