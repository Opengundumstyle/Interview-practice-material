/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'

game plan:
create vowel=[a e i o u ]
create a new string
loop through given string;
if the char of the string matches one of the vowel element, we skip it 
return stirng at the end of loop

*******************************************************************************/

function disemvowel(string) {
  let vowel='aeiouAEIOU';
  let noVowelStr=''
  for(let i=0;i<string.length;i++){
    if(vowel.indexOf(string[i])===-1){
      noVowelStr+=string[i]
    }
  }
  return noVowelStr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
