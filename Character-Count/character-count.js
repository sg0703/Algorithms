// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    var characterTotalCount = {}; // object holds character:count
    var charactersChecked = [];// array, holds characters checked 
    var characterCount = 1;

    for (i = 0; i < str.length; i++) {
        for (c = 0; c < str.length; c++) {
            // Three conditions:
            // 1) Number can't count itself
            // 2) Character in str must match character being counted
            // 3) Character won't be counted if the master character has already been entered into object

            if ((c != i) && str[i] === str[c] && charactersChecked.indexOf(str[i]) === -1) {
                characterCount++;
            }
        }

        // only do the following if this character has NOT been counted before
        if (charactersChecked.indexOf(str[i]) === -1) {
            var key = str[i];
            // add data to object
            characterTotalCount[key] = characterCount;
            // reset characterCount 
            characterCount = 1;
            charactersChecked.push(key);
        }
        
    }
    console.log(characterTotalCount);

    return characterTotalCount;
};
