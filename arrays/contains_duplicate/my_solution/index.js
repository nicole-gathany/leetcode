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

//tried again 8/24

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
//  var containsDuplicate = function(nums) {
    
//   let obj = {};
   
//   for(let curr of nums){
    
//      if(!obj[curr]){
//          obj[curr] = 0;
//           obj[curr]++;
//      }
//      else if(obj[curr]){
//          obj[curr]++;
//          if(obj[curr]>=2){
//              return true;
//          }
//      }
          
//       }
     
//       return false;
//   }
 
  //faster than 68.25%


  // let set = new Set(nums);
  // console.log([...set])
  // return [...set].length === nums.length? false : true //hoping it's wrong rn
  
  
  //faster than 23.64% of js subs
  
//     let obj = {};
  
//     for(let curr of nums){
//        if(!obj[curr]){
//            obj[curr] = 0;
//            obj[curr]++
//        }
//         else if (obj[curr]){
//           obj[curr]++  
//         }
      
//     }
  // console.log(obj)
  // return Object.values(obj).some(a => a>1);
  
  
  
  
 // solution below is faster than 68.41% of JS
//     let arr = nums.sort((a, b) => a - b);
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===arr[i+1]) return true;
//     }
  
//     return false;
//};
