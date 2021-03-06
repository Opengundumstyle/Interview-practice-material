/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

function moreDotLessDash(str) {
  let countDot=0;
  let countDash=0;
  for(let i=0;i<str.length;i++){
      if(str[i]==='.'){
          countDot++ 
      }else if(str[i]==='-'){
         countDash++
      }
  }
   return (countDash<countDot)? true:false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
