// Write a function `inPigLatin(sentence)` that translates an entire sentence into
// pig latin. Any words that were capitalized in the input sentence should be also
// capitalized in the new sentence. Use the `pigLatinize(word)` function you created earlier.
//
// Examples:
//
// inPigLatin("Shmanthony is the best teacher"); // => 'Anthonyshmay isyay ethay estbay eachertay'
// inPigLatin("let us Dance"); // => 'etlay usyay Anceday'
// inPigLatin("this is the time of my life"); // => 'isthay isyay ethay imetay ofyay myay ifelay'

function inPigLatin(sentence){
    let wordArr = sentence.split(' ');
    let finalArr = []
    for(let word of wordArr){
        word = pigLatinize(word)
        finalArr.push(word)
        
    }
    
    return finalArr.join(' ')
    
}

function pigLatinize(word){
    vowel = 'aeiou'
  for(let i = 0; i < word.length ; i ++){
     if(vowel.indexOf(word[i]) > -1){
         if(i === 0){
             return word + 'yay'
         }
         if(word[0].toUpperCase() === word[0]){
            
            word = word[0].toLowerCase() + word.slice(1);
            word =  word.slice(i) + word.slice(0,i) + 'ay'
            let newWord = word[0].toUpperCase() + word.slice(1)
             return newWord
             
         } 

         return word.slice(i) + word.slice(0,i) + 'ay'
     }  

  }

  return word

}


console.log(inPigLatin("Shmanthony is the best teacher"));
console.log(inPigLatin("let us Dance"));
console.log(inPigLatin("this is the time of my life"))