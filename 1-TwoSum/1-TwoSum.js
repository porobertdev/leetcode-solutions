/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const indexTwo = nums.indexOf(diff);

        if (indexTwo !== -1 && indexTwo !== i) {
            return [i, indexTwo];
        }
    }
};