// /**
//  * @param {string[][]} items
//  * @param {string} ruleKey
//  * @param {string} ruleValue
//  * @return {number}
//  */

//this solution: Runtime: 84 ms, faster than 95.87% of JavaScript online submissions for Count Items Matching a Rule.
//Memory Usage: 43 MB, less than 27.51% of JavaScript online submissions for Count Items Matching a Rule.
 
var countMatches = function(items, ruleKey, ruleValue) {
    let result=0;
    for(let i=0; i<items.length; i++){
         if(ruleKey =="type"){
            //we're only looking at items[i][0]
             if(ruleValue== items[i][0]){
                 result++
             }
        }else if(ruleKey == "color"){
            //we're only looking at items[i][1]
            if(ruleValue==items[i][1]){
                result++
            }
        }else if(ruleKey == "name"){
            //we're only looking at items[i][2]
            if(ruleValue==items[i][2]){
                result++
            }
        }
        
    }
    return result
};


// type value is always items[i][0] but there is nothing that explicitly says "type"
//so ruleKey is tricky to detect