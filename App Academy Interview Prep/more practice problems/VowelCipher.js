/*Write a function vowelCipher that takes in a string and returns a new string where 
every vowel becomes the next vowel in the alphabet. */

function vowelCipher(string) {
   let vowel = 'aeiou'
   let newString = ''
   for(let i = 0 ; i < string.length; i ++){
       let currentidx = vowel.indexOf(string[i])
       
      if( currentidx> -1){
          let newIdx =((currentidx + 1) % 5);
          let newWord = vowel[newIdx]
          newString += newWord
          
      }else{
          newString += string[i]
      }
  
  }
     return newString

}   


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"