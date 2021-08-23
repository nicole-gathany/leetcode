function twoSum(nums, target) {
    let vals = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in vals) {
        return [vals[target-nums[i]], i];
      } else {
        vals[nums[i]] = i;
      }
    }
    return [];
  };

  // i like this best practice solution
  // it's creating an object that saves the number and it's index. 
  //if any of the numbers that follow the the number saved sums up to the target with that numner
  //it returns the index of that number and the index of the number that added to it equals the target
  // this language is so weird! sorry!! 

  