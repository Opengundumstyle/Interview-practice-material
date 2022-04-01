/*
Given a string s, return true if the s can be palindrome after deleting at most one 
character from it.

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    const check = (start, end, maxRemovals) => {
        if (start >= end) return true
        if (s[start] === s[end]) {
          return check(start + 1, end - 1,maxRemovals)
        }
        
        if (maxRemovals > 0) {
          if (check(start + 1, end, maxRemovals - 1)) return true
          return check(start, end - 1, maxRemovals - 1)
        }
        
        return false
      }
      
      return check(0, s.length - 1, 1)
    
 };


 
 //********************************* method 2

 /**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0 ; 
    let j = s.length -1;
    while(i < j){
        if(s[i] !== s[j]){
            let canFix1 = checkValid(i+1,j,s)
            let canFix2 = checkValid(i,j-1,s)
            if(canFix1 || canFix2){
                return true 
            }
            return false
            
        }
            i++;
            j--;
    }
    return true;
 };


function checkValid(i,j,str){
    if(str[i]=== str[j]){
    while(i < j){
        
          if(str[i]!== str[j]) return false;
        
          i++;
          j--;
        }
        return true;
    }
    
      return false;
    
}