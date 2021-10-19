/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
   let compareArr=sentence.split(' ');
   let highNum='';
   for(let i of compareArr){
     if(i.length>=highNum.length){
       highNum=i;
     }
   }
   return highNum;

}
// You want to grab the last longest word not the first one
// Keep an eye on the examples for these details -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
