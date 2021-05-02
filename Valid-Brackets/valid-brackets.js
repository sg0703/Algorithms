// Write a function to take a string and return true if it contains 
// valid sets of matching brackets, else return false
var validBrackets = function(str) {
    // put string in array to make sorting easier
    var string = str.split(' ');

    // create object with closing bracket key to make checking pairs easy 
    let keys = {
        '[': ']',
        '(': ')',
        '{': '}'
    }

    // create empty array to map each bracket pair's starting and closing position
    let stringMap = [];

    // loop through our string array to map where the brackets start and close
    // we will use this to compare the bracket pairs to each other 
    for(let i = 0; i < string.length; i++) {
        for(let n = i; n < string.length; n++) {
            if(keys[string[i]] === string[n]) {
                stringMap.push({
                    start: i,
                    close: n,
                });
            }
        }
    }

    // debugging
    console.log(stringMap);
    
    // if stringMap is 0, nothing matched, return false
    if(stringMap.length === 0) {
        return false;
    }
    // if the string passed is two brackets and the string map length is 1, that means it was a valid pair, return true
    else if(stringMap.length === 1 && string.length === 2) {
        return true;
    }

    // for all other strings, use loop to count valid pairs and then compare that against all pairs in stringMap
    // if valid === stringMap, all pairs were valid, return true
    let valid = 0;
    for(let i = 0; i < stringMap.length; i++) {
        // if bracket pairs are immediately adjacent to each other, valid
        if(stringMap[i].close - stringMap[i].start === 1) {
            valid++;
        }
        // if i can still access next element in array...
        else if (i + 1 < stringMap.length) {
            // IF the first bracket pair begins before the second bracket pair
            // AND the second bracket pair closes before the first bracket pair (ie they are nested properly) - valid
            if(stringMap[i].start < stringMap[i + 1].start && stringMap[i].close > stringMap[i + 1].close) {
                valid++;
            }
        }
    }

    return valid === stringMap.length;
};