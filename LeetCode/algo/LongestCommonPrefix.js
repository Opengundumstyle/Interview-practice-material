/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/
/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
    let longest = '';
   if(strs.length === 0){
       return longest;
   }
   let comparisonWord = strs[0];
   let comparisonIdx = 0;
   for(let comparisonLetter of comparisonWord){
       for(let i = 0; i < strs.length;i++){
           let currentWord = strs[i];
           let currentletter = currentWord.charAt(comparisonIdx);

           if(comparisonLetter !== currentletter || comparisonIdx >currentWord.length) {
               return longest;
           }
       }
       comparisonIdx++;
       longest += comparisonLetter;
   }
   return longest
};