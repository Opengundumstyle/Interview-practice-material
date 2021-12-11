/*
Given a string s, return the longest palindromic substring in s.
Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

*/
var longestPalindrome = function(s) {
    if(s.length < 1 || s === null){
        return " "
    }
    let longest = '';
    for(let i = 0 ; i < s.length ; i++){
        let oddPalindrome = expandFromCenter(s,i,i);
        let evenPalindrome = expandFromCenter(s,i-1,i)

        if(oddPalindrome.length > longest.length){
              longest = oddPalindrome
        }
        if(evenPalindrome.length > longest.length){
            longest = evenPalindrome
            
        }
    }
    return longest;

};

function expandFromCenter(str,left,right){
    let i = 0;
    while(str[left - i] && str[left -i] === str[right+i]){
        i++;
    }
    i--;
    
    return str.slice(left - i,right+i +1)
}