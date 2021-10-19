/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"

game plan:
receive a string;
split string into array of ele;
create empty array to store each modified ele from string;

helper to remove last vowel from word;
loop from the back of the word by each char;
if char is vowel;
set word = word.slice(char.length,)+word.slice();
new return word;
else return old word;

inside mainfunction:
loop through array of ele;
push cb(ele) to empty array,
end of the loop return emptyarray.join.


*******************************************************************************/

function hipsterfy(sentence) {
   let vowelArr=[];
   let holderArr=sentence.split(' ')
   for(let words of holderArr){
      vowelArr.push(removeVowel(words))
   }
   
   return vowelArr.join(' ')
   

}

function removeVowel(word){
   let vowel=['a','e','i','o','u']
   for(let i=word.length-1;i>=0;i--){
      if(vowel.indexOf(word[i])!==-1){
         word=word.slice(0,i)+word.slice(i+1)
         return word;
      }
   }
   
   return word;
   
}

console.log(hipsterfy("proper tonic panther"))


// You need to create a helper function to loop backwards
// through the string to remove the last vowel. -DY
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
