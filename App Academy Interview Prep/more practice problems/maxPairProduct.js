// Write a function `maxPairProduct(array)` that takes in an array of numbers and
// returns the largest product of any pair of numbers from the array.  
//
// Examples:
//
// maxPairProduct([5, 7, 6, 9, 3]); // => 63
// maxPairProduct([4, 2, 5, 6]); // => 30

/*
game plan:
set 1stNum = 0
set 2ndNum = 0
loop through array ;
 currentNUm > 1st set 1st NUm =currentNuma  set 2ndNum = 1stNum
 currentNum > 2ndNum set 2ndNum = currentNum;

 return 1st * 2nd
 */

function maxPairProduct(array){
   let greatestNum = 0;
   let secondNum = 0;
   for(let ele of array){
     if(greatestNum < ele){
        let temp = greatestNum
        greatestNum = ele;
        secondNum = temp

   }
    else if(secondNum < ele){
        secondNum = ele;
     }
   }
   return greatestNum * secondNum
}
console.log(maxPairProduct([5, 7, 6, 9, 3]))
console.log(maxPairProduct([4, 2, 5, 6]))
console.log(maxPairProduct([4, 3, 6, 6]))