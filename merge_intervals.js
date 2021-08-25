//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

var merge = function(intervals) {
    let arr = intervals.slice(0).sort((a, b) => a[0] - b[0]);
   
    let end = arr.length-1;
    for(let i=0; i<end; i++){
        if(arr[i][1]>=arr[i+1][0]){
            arr[i] = [Math.min(arr[i][0], arr[i+1][0]), Math.max(arr[i][1], arr[i+1][1])]
            arr.splice(i+1, 1)
            i--
            end--

        }
    }
    return arr;
};