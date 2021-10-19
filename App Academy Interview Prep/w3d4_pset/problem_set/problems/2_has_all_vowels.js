/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false

gameplan: 
1.receive a string;
2.create vowel array['a,e,i,o,u']
3.create a for loop to check if each char in vowel string exist in the given string;
4.if doesn't, return false
5.at the end of the loop return true;
***********************************************************************/

function hasAllVowels(str) {
    let vowel=['a,e,i,o,u']
    for(let i of vowel){
          if(str.indexOf(i)===-1){
                return false;
            }
    }
  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
