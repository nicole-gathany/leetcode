var containsDuplicate = function(nums) {
    //array of integers
    //if a number is there more than once, return true
    //if no numbers have any duplicates return
    nums.sort((a, b)=> a-b);
    for(let i=0; i<nums.length; i++){
      if(nums[i]===nums[i+1]){
        return true;
      }
    }
    return false;
};

// Runtime: 84 ms, faster than 81.93% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 42.7 MB, less than 81.55% of JavaScript online submissions for Contains Duplicate.