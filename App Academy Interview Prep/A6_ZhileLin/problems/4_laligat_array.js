/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]

2 helper function: 
function 1: to create an array of prime numbers to each element

function 2: take the sum of the array and return to main func

main function: 
create an empty array 
loop through given array and with 2 helpers function ,input the return value to empty array
return empty array
*******************************************************************************/

function laligatArray(array) {
   let finalArr=[];
   for (let ele of array){
     finalArr.push(laligatVal(isPrimeArr(ele)))
   }
   return finalArr;
}


function isPrimeArr(ele){
  let laligatArr=[];
  for(let i=2;i<=ele;i++){
    if(isPrime(i)){
      laligatArr.push(i)
    }
  }
  return laligatArr;
}

function isPrime(num){
  if(num<2){
    return false;
  }
  for(let i=2;i<=num;i++){
    if(num%i===0){
      return false
    }
  }
  return true;
}


function laligatVal(arr){
  let sum=0;
  for(let i of arr){
     sum+=i
  }
  return sum;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
