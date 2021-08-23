var twoSum = function(nums, target) {
    
let result = [];

  for(let i=0; i<nums.length; i++){
    if(nums.indexOf(target-nums[i])!==i &&nums.indexOf(target-nums[i])!==-1){
      result.push(i, nums.indexOf(target-nums[i]));
    }
  }
  return result.slice(0, 2).sort((a, b)=> a-b);
};

//My solution does have the time complexity O(n)! Actually it is O(n**2)

//I tried the solution again today (8/23/2021) 

//given an array of integers and a target (integer)
//find the two indexes whose elements are equal to the target
//the arrays are not sorted
//the nums array can be quite large
//the elements in nums and the target can be negative, positive or zero. 

//less memory //more time

// var twoSum = function(nums, target) {

 // for(let i=0; i<nums.length; i++){
    //     const diff = target - nums[i]
    //     if(nums.indexOf(diff)!==-1 && nums.indexOf(diff)!==i){
    //         return [i, nums.indexOf(diff)]
    //     }
    // }
//}


//moderate memory (less than 25.95% of JavaScript online submissions), moderate time (faster than of 62.78% submissions)
//var twoSum = function(nums, target) {
//     let result = []
//     let i = 0;
//     let j = nums.length-1;
//     let arrSorted = nums.slice(0).sort((a,b) => a - b);

//     while(result.length<2){
//        if(arrSorted[i]+arrSorted[j]===target && i!==j) {
//            result.push(arrSorted[i], arrSorted[j])
//        }
//         else if(arrSorted[i]+arrSorted[j]<target){
//             i++
//         }
//         else if(arrSorted[i]+arrSorted[j]>target){
//             j--
//         }
//     }
//      if(result[0]!==result[1]) return result.map(a => nums.indexOf(a))
//     else{ return [nums.indexOf(result[0]), nums.lastIndexOf(result[1])]}
//}