// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    var sameLetters = 0;

    strA = strA.split('');
    strB = strB.split('');

    if (strA.length === strB.length) {
        // loop through strA
        for(i = 0; i < strA.length; i++) {
            // loop through strB
            for(b = 0; b < strB.length; b++) {
                if (strB[b] === strA[i]) {
                    strB.splice(b,1);
                    sameLetters++;
                }        
            }
        }

        if (sameLetters === strA.length) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

