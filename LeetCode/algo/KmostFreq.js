/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let freqObj = {};
    for(num of nums){
        if(!freqObj[num]){
            freqObj[num] = 1;
        }
        else{
            freqObj[num] ++;
        }
    }
    
    let finalObj ={}
    for(let item in freqObj){
        
        if(!finalObj[freqObj[item]]){
            finalObj[freqObj[item]] = []
        }
            finalObj[freqObj[item]].push(item)
    }
    
    
    let sortFreq = Object.keys(finalObj).sort((a,b) => b-a)
    let finalArr = [];
 
    
    for(let i = 0, finalFreq =0 ; i < sortFreq.length ; i ++ ){
        let freq = sortFreq[i]
        let keys = finalObj[freq]
         for(let j = 0 ; j < keys.length && finalFreq < k ; j++ ){
             finalArr.push(keys[j]);
             finalFreq ++;
         }
    }
    
    return finalArr
};