/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'

take in a string,
loop through the string to get the position of the vowel
slice the word after the vowel and add them to the string
***********************************************************************/

function reverb(word) {
    let vowel='aeiou'
   for(let i=word.length-1;i>=0;i--){
       if(vowel.indexOf(word[i])!==-1){
           word=word+word.slice(i)
           return word;
       }
   }
   return word;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
