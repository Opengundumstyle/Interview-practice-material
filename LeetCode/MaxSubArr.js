/**
Given an integer array nums, find the contiguous subarray (containing at least one 
number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//brute focrce version O(n^2)
 var maxSubArray = function(nums) {
    let maxSum = -Infinity
   
    for(let i = 0 ; i < nums.length; i++){
       let currentSum = 0;
      for(let j = i; j < nums.length; j++){
          currentSum += nums[j]
          console.log(currentSum)
          maxSum = Math.max(maxSum, currentSum)
          
      }
        }
    
    return maxSum;
};
//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
//console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))

//dynamic programming
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = - Infinity;
    let currentSum = 0;
 
    for(let i = 0 ; i < nums.length; i++){
        let num = nums[i];
        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum)
      }
    
     return maxSum
    
    }
 