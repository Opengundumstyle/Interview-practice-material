/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
  let countObj={};
  for(let i of string){
      if(countObj[i]){
        countObj[i]++;
      }else{
        countObj[i]=1;
      }
  }
  let countNum=0;
  for(let key in countObj){
    //var countNum=0;
      if(countObj[key]>1){
          countNum++;
      }
  }
  return countNum;
   
}

console.log(countRepeats('hellobootcampprep'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
