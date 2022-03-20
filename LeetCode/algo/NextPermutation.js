/*
Implement next permutation, which rearranges numbers into the lexicographically next greater 
permutation of numbers.

If such an arrangement is impossible, it must rearrange it to the lowest possible order (i.e., 
sorted in ascending order).

The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {// [158476531] =>[158513467]
     //find peak
     let peak;
     for(let i = nums.length ; i>= 0; i--){
         if(i===0){
             peak = 0
         }
         if(nums[i]>nums[i-1]){
          peak = i;
          break;
         }
     }
    // find largest number on the right of peak;
    for(let j= nums.length - 1; j >= 0; j--){
        if(nums[j] > nums[peak - 1]){
            let temp = nums[j]
            nums[j] = nums[peak -1]
            nums[peak -1] = temp
            break;
        }
    }
    // Reverse from peak to end of arr
    let start = peak;
    let end = nums.length -1
    while(start < end){
         let temp = nums[start];
         nums[start] = nums[end];
         nums[end] = temp;
         start ++;
         end--;
    }
    return nums;
};