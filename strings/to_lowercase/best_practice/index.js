const toLowerCase = (str) => {
    //Calculate Ascii diff from a to A
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    //getting the difference between the charCode of the uppercase and lower case
    //lowercase comes first because lowercase letters have a higher ASCII
    //if they are both lower case the difference will be 0
    //but we're just getting the different between lowercase "a" and uppercase "A"
    //because that's the difference between all uppercase and lowercase letters
    
    return Array
        .from(str)
        .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
        // so you can used && in ternary operators!!
        //i also didn't know that you could evaluate strings using comparative operators >= 
        .join('');
};