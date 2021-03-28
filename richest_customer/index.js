// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
 var maximumWealth = function(accounts) {
    let resultArr = accounts.map(a => a.reduce((a,b)=>a+b)).sort((a,b)=>a-b)
     return resultArr[resultArr.length-1]
 };