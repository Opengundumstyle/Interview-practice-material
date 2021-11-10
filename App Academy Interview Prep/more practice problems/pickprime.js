/*

Write a function pickPrimes that takes in an array of numbers and returns
 a new array containing only the prime numbers.

*/

function pickPrimes(array) {
     let primeArr = [];
     for(let ele of array){

        if(isPrime(ele)) primeArr.push(ele)
     }
   
    return primeArr
}

function isPrime(ele){
   if(ele < 2) return false;
   for(let i = 2 ; i < ele; i ++){
       if(ele % i === 0) return false
   }
   return true

}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]