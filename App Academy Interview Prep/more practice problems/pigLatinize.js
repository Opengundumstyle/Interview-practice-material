// Write a function `pigLatinize(word)` that translates a single word into its pig
// latin equivalent. The rules for the translation are as follows:
//
// 1) For words that begin with a non-vowel, all letters before the initial
// vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
//   Examples
//   "pig" → "igpay"
//   "banana" → "ananabay"
//   "trash" → "ashtray
//
// 2) For words that begin with vowel sounds, just adds "yay" to the end
//   Examples
//   "eat" → "eatyay"
//   "omelet" → "omeletyay"
//   "are" → "areyay"
//
// Note: y should not be considered a vowel
//
// Examples:
//
// pigLatinize("teacher"); // => "eachertay"
// pigLatinize("trash"); // => "ashtray"
// pigLatinize("eat"); // => "eatyay"
// pigLatinize("orange"); // => "orangeyay"

function pigLatinize(word){
    vowel = 'aeiou'
  for(let i = 0; i < word.length ; i ++){
     if(vowel.indexOf(word[i]) > -1){
         if(i === 0){
             return word + 'yay'
         }
         return word.slice(i) + word.slice(0,i) + 'ay'
     }  

  }

  return word

}

console.log(pigLatinize("teacher"))
console.log(pigLatinize("trash"))
console.log(pigLatinize("eat"))
console.log(pigLatinize("orange"))
