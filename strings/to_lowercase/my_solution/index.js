// var toLowerCase = function(s) {
//     return s.toLowerCase();
// };

//the purpose of the problem was actually to use ASCII

var toLowerCase = function(s) {
    let arr = s.split("").map(letter => letter.charCodeAt(0));
    //console.log(arr.map(letter => letter.charCodeAt(0)));
    console.log(arr)
    let result = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=65 && arr[i]<=90){
            result.push(arr[i]+32)
        }
        else {
            result.push(arr[i])
        }
    }
    
    //console.log(result.map(letter=> String.fromCharCode(letter)))
    return result.map(letter=> String.fromCharCode(letter)).join("")
};