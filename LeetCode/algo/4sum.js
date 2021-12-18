/*
Given an array nums of n integers, return an array of all the unique quadruplets 
[nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// Time: O(n^3)
// Space: 3Cn ??
var fourSum = function(nums, target) {
    const result = []
    
    if (nums.length < 4) return result
    
    // O(logN)
    nums.sort((a,b) => a - b)
    
    // O(n^3)
    for (let i = 0; i < nums.length - 3; i++) {
      // skip the same numbers
      if (nums[i] === nums[i - 1]) continue
      
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] == nums[j - 1]) continue
        
        let k = j + 1
        let l = nums.length - 1
        
        while (k < l) {
          const sum = nums[i] + nums[j] + nums[k] + nums[l]
          
          if (sum === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]])
          }
          
          if (sum <= target) {
            k += 1
            while (nums[k] === nums[k - 1]) {
              k += 1
            }
          }
          
          if (sum >= target) {
            l -= 1
            while (nums[l] === nums[l + 1]) {
              l -= 1
            }
          }
        }
      }
    }
  
    return result
};