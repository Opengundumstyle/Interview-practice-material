/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10

game plan:
1.recieve an array,
2.declare min and max var starting at position arr[0]
3.use for loop to compare min and max with current var in the arr
4. if min>current, set min to current 
5. if max<current, set max to current
6.at the end of the loop return max-min

*******************************************************************************/

function minMaxDifference(array){
      let max=array[0];
      let min=array[0];
      for(let i=0;i<array.length;i++) {
        if(min>array[i]){
              min=array[i]
        }
        else if(max<array[i]){
              max=array[i]
        }
       }
      return max-min;
   }

   console.log(minMaxDifference([1,2,3,4,5]))
// You don't need the nested for loops to solve this question, since it is only
// using 1 dimensional arrays. You should declare the max and min to the smallest 
// and largest values you can, respectively. Then you can replace them with if
// conditions as you loop through. -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
