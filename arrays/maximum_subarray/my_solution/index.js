var maxSubArray = function(nums) {
    
    let prev = nums[0];
    let max = nums[0];
    
    for(let i=1; i<nums.length; i++){
        prev = Math.max(nums[i], prev+nums[i]);
        max = Math.max(max, prev);
    }
    
     return max;

}