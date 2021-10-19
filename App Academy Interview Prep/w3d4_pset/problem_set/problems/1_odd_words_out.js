/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
game plan:
given a string;
split sentence into array;
loop through array to check if each ele is even 
if ele%2===0 
push  ele into the emtyarray.
at end of loop return emtyarry.join()

***********************************************************************/

function oddWordsOut(sentence) {
    let evenArr=sentence.split(" ");
    let resultArr=[];
   for(let i of evenArr){
       if(i.length%2===0){
            evenArr.push(i)
         }
       }
       return resultArr.join(' ');
   }

console.log(oddWordsOut('go to the store and buy milk'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
