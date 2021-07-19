/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

//not to different than my solution. just in one line and no need to make a new variable