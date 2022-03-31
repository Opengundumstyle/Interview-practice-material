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