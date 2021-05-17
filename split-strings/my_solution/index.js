// my solution actually never worked. 
//it returned 2 when it was supposed to return 4 for balancedStringSplit("RLRRLLRLRL")
/**
 * @param {string} s
 * @return {number}
 */
 var countR = function(string){
    let numberOfRs = 0;
     for(let i=0; i<string.length; i++){
         if(string[i]==="R") numberOfRs++
     }
     return numberOfRs;
 }
 
 var countL = function(string){
    let numberOfLs = 0;
     for(let i=0; i<string.length; i++){
         if(string[i]==="L") numberOfLs++
     }
     return numberOfLs;
 }
 
 
 
 var balancedStringSplit = function(s) {
     //parameter is a string of R and L
      let count = 0, start = 0, end = 2;
     //how do we count Ls and Rs? I made
     while(end<s.length){
         if(countL(s.substring(start, end))!==countR(s.substring(start,end))){
             end += 2;
         } else if(countL(s.substring(start, end))===countR(s.substring(start,end))){
             count++
             start +=2
             end +=2
         }
     }
     
     return count;
 };
 
 
  //let count = 0;//return an integer which is the count of balanced splits of the string.
     //example RLLL 1
     //balancedStringSplit("RLRRLLRLRL")
     //"RL" does it have an equal number of Rs and Ls? yes. then count++ (1) and move on to the next substring.
     //RR does it have an equal number of Rs and Ls? no. then no action. (count is 1 still)
     //RRLL has equal number of R's and L's. then count++ and move on to the next substring. count is 2
     //RL yes. count++ and move on. count 3
     //RL. yes. count++ and move on. count 4. 
     //notes we always examine an even number of characters in the string.
      
      //count is what we would return.