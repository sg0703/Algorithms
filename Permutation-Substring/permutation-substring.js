// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    strArray = str.split('');
    subArray = sub.split('');

    for(i = 0; i < strArray.length; i++) {
        for(c = 0; c < subArray.length; c++) {
            if (strArray[i] === subArray[c]) {
                subArray.splice(c,1);
            }
        }
    }

    if(subArray.length === 0) {
        return true;
    }
    else {
        return false;
    }
};
