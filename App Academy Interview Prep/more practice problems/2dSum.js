// Write a method two_d_Sum that takes in a two dimensional array and 
// returns the sum of all elements in the array.

function two_d_sum(arr){
 let sum = 0;
 for(let ele of arr){
   for(let item of ele){
     sum += item
   }
 }

 return sum

}



array_1 = [
  [4, 5],
  [1, 3, 7, 1]
]
console.log(two_d_sum(array_1))   // => 21

array_2 = [
  [3, 3],
  [2],
  [2, 5]
]
console.log(two_d_sum(array_2) )   //=> 15