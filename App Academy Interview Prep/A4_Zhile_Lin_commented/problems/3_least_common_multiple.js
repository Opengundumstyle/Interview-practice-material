/*******************************************************************************
Write a function `leastCommonMultiple(num1, num2)` that returns the
lowest number which is a multiple of both inputs.

Examples:

leastCommonMultiple(2, 3) => 6
leastCommonMultiple(6, 10) => 30
leastCommonMultiple(24, 26) => 312
gameplan:
given 2 ints, num1 and num2;
create a var lowFactor with value 0;
set up forloop from i=num1*num2 to i=1;
within, we will have a if statement to check if  both number is divisble by i;
if true set lowFactor =i
at the end of the loop return lowFactor;
*******************************************************************************/

function leastCommonMultiple(num1, num2) {
  let lowFactor=0;
  for(let i=num1*num2;i>0;i--){
      if(i%num1===0&&i%num2===0){
        lowFactor=i;
      }
  }
  return lowFactor;
   
}

console.log(leastCommonMultiple(2, 3));
// Try to format your brackets more evenly
// The incrementer should probably not be under the else condition -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = leastCommonMultiple;
