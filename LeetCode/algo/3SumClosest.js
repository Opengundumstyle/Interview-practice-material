/*
Given an integer array nums of length n and an integer target, find three integers in nums such 
that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let ans = nums[0] + nums[1] + nums[2];
    for(let i = 0;i < nums.length - 2;i+=1 ){
         let start = i +1, end = nums.length -1;
         while(start < end){
             const sum = nums[i] + nums[i] + nums[i];
             if(sum > target){
                 end  -= 1;
             }else{
                 start +=1;
             }
             if(Math.abs(target - sum) < Math.abs(target - ans)){
                 ans = sum
             }
         }
    }
    return ans;
};