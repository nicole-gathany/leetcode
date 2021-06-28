var twoSum = function(nums, target) {
    
let result = [];

  for(let i=0; i<nums.length; i++){
    if(nums.indexOf(target-nums[i])!==i &&nums.indexOf(target-nums[i])!==-1){
      result.push(i, nums.indexOf(target-nums[i]));
    }
  }
  return result.slice(0, 2).sort((a, b)=> a-b);
};

//My solution does have the time complexity O(n)!