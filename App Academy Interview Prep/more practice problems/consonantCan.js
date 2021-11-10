/*Write a function consonantCancel that takes in a sentence and returns a new sentence
 where every word begins with it's first vowel. */

 function consonantCancel(sentence) {
    let wordArr = sentence.split(' ');
    let newArr = [];
    for(let word of wordArr){
        newArr.push(removeVowel(word))
    }
    return newArr.join(' ')

}

function removeVowel(word){
    let vowel = 'aeiou'
  for(let i = 0 ; i < word.length ; i++){
      if(vowel.indexOf(word[i]) > -1){
          return word.slice(i)
      }
  }
     return word; 
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"