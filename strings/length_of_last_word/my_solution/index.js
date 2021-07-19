var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    return arr[arr.length-1].length;
};

//Runtime: 68 ms, faster than 91.84% of JavaScript online submissions for Length of Last Word.
//Memory Usage: 38.7 MB, less than 57.36% of JavaScript online submissions for Length of Last Word.