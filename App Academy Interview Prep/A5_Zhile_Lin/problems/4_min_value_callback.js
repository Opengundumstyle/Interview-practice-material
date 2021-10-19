/*******************************************************************************
Write a funtion minValueCallback(array, cb) that takes in an array of numbers and
a callback. The function should call `cb`, passing in the minimum number of the array.
`minValueCallback` should return the return value of `cb`. If the array is empty,
then pass `null` into `cb`.

Examples:

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18

game plan:
we receive array and cb();
inside the min function we create a loop through the array;
create var min=arr[0];
compare the value of each ele;
if current ele <min ,set min to ele
invoke ele to cb()
return cb(ele)

*******************************************************************************/

function minValueCallback(array, cb) {
 let min=array[0];
 if(array.length===0){
   return cb(null);
 }
 for(let num of array){
   if(num<min){
     min=num;
   }
 }
 return cb(min);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minValueCallback;
