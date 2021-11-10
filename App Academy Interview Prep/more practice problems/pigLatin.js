/*
Write a method pig_latin_word that takes in a word string and translates 
the word into pig latin.

*/

// # Pig latin translation uses the following rules:
// # - for words that start with a vowel, add 'yay' to the end
// # - for words that start with a nonvowel, move all letters before the first vowel 
//to the end of the word and add 'ay'

function pig_latin_word(word){
let vowel = 'aeiou'


    for(let i = 0; i < word.length ; i++){
        if(vowel.indexOf(word[i]) > -1){
           if(i === 0) return word + 'yay'
           else{
            return word.slice(i) + word.slice(0,i) +'ay'
           }
        }
    }
    return word;
}





console.log(pig_latin_word("apple") ) // # => "appleyay"
console.log( pig_latin_word("eat") )   // # => "eatyay"
console.log( pig_latin_word("banana") ) //# => "ananabay"
console.log( pig_latin_word("trash") )  // # => "ashtray"