/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

function isPrime(number) {
  for(let i=2;i<Math.abs(number);i++){

    if(number<2)return false;
        
    if(number%i===0){

      return false
      
    }
  }
  return true;

}
//You should have a statement at the beginning to catch the numbers
//that are less than 2 -DY
console.log(isPrime(-7))
console.log(isPrime(11))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
