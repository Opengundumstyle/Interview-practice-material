/*Write a function anagrams that takes in two words and returns a boolean indicating
 whether or not the words are anagrams. Anagrams are words that contain the same characters 
 but not necessarily in the same order. Solve this without using .sort(). */

 function anagrams(word1, word2) {
       if(word1.length !== word2.length) return false
       for(let i = 0 ; i < word1.length ; i ++){
        if(word2.indexOf(word1[i]) === -1){
            return false
        }
       }
       return true;
}

console.log(anagrams("cat", "act"));          // true
console.log(anagrams("restful", "fluster"));  // true
console.log(anagrams("cat", "dog"));          // false
console.log(anagrams("boot", "bootcamp"));    // false