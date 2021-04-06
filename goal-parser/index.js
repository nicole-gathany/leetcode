var interpret = function(command) {
    //charAt()
    let resultArray = []
    for(let i=0; i<command.length; i++){
        if(command.charAt(i)==="G"){
            resultArray.push("G")
        }else if(command.charAt(i)==="(" && command.charAt(i+1)===")"){
            resultArray.push("o")
        } else if (command.charAt(i)==="("&&command.charAt(i+1)==="a"&&command.charAt(i+2)==="l"&&command.charAt(i+3)===")"){resultArray.push("al")}
    }
    return resultArray.join("")
};

//parameter is a string

//faster than 52%, less space than 24%
var interpretOp1 = function(command) {
    //charAt()
   return command.split("()").join("o").split("(al)").join("al")
};
