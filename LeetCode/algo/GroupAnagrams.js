// Given an array of strings strs, group the anagrams together. You can
// return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
//different word or phrase, typically using all the original letters exactly
// once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let cache = {};
    const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    for(let str of strs){
         let Key = str.split('').reduce((total,char)=>total * primes[char.charCodeAt()-97],1);
         (!cache[Key])? cache[Key] = [str] : cache[Key].push(str);
    }
    return Object.values(cache);
};