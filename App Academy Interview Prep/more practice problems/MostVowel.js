/*
Write a function mostVowels that takes in a sentence string and returns the word of 
the sentence that contains the most vowels.

*/ 

function mostVowels(sentence) {
   let wordArr = sentence.split(' ')
   let mostVowel = ''
   for(let word of wordArr){
     let wordCount = countVowel(word)
     if(countVowel(mostVowel) < wordCount){
         mostVowel = word
     }
   }
   return mostVowel
    
}

function countVowel(word){
   let count = 0;
   let vowel= 'aeiou'
   for(let i = 0 ; i < word.length; i ++){
       if(vowel.indexOf(word[i]) > -1){
        count ++
       }
   }
   return count;
}



console.log(mostVowels("what a wonderful life")); // "wonderful"