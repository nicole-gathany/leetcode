//moderate speed
var reverse = function(x) {
   
    if(x<10 && x>-10) return x;
    let sign = x/Math.abs(x);
    
    const answer = sign * +Math.abs(x).toString().split("").reverse().join("");
    
    return answer>Math.pow(2, 31)-1 || answer< -Math.pow(2, 31) ? 0 : answer;
    
};

//faster for some reason even though it's kinda the same thing

// var reverse = function(x) {
   
//     if(x<10 && x>-10) return x;
  
    
//     const answer = +Math.abs(x).toString().split("").reverse().join("");
    
//     return answer>Math.pow(2, 31)? 0 : answer*Math.sign(x);
    
// };