var findKthPositive = function(arr, k) {
    let missing = [];
    let i=1;
    while(missing.length<k){
      if(arr.indexOf(i)===-1){
        missing.push(i)
      }
      i++
    }
    return missing[k-1]
  };