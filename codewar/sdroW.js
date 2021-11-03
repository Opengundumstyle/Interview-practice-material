/*
Write a function that takes in a string of one or more words, and returns the same string, but with all 
five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of
only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test")
 => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/
function spinWords(string){
    let reverArr = []
    let stringArr = string.split(' ')
    for(let word of stringArr){
       if(word.length >= 5){
         reverArr.push(makeRev(word))
       }
        else{
          reverArr.push(word)
          
        }
    }
  
  return reverArr.join(' ');
  }

function makeRev(word){
  
  let newWord = ''
  for(let i = word.length -1 ; i >= 0 ; i --){
    
    newWord += word[i]
    
  }
  
  return newWord;
  
}