/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, 
i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = [];
    let currentResult = [];
    
    nums.sort((a,b) => a -b);//sort number from smallest to largest
    let left = 0;
    let right = nums.length -1;

    for(let i = 0 ; i < nums.length ; i++ ){
        if(i > 0 && nums[i] ===nums[i -1]) continue;
         left  = i + 1;
         right = nums.length - 1;
         let sum = 0;
         while(left < right){
            sum  = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.push([nums[i],nums[left],nums[right]])
                left ++;
                right --;

                while(left < right && nums[left] === nums[left - 1])left ++;
                while(left < right && nums[right] === nums[right + 1])right--;
            }else if(sum > 0){
                right --;
            }else{
                left ++;
            }
         }
    }
    return result;
};