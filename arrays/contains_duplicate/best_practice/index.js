var containsDuplicate = function(nums) {
    return nums.sort().some((a, i) => a === nums[i - 1]);
};

//cool because it is 1 line

