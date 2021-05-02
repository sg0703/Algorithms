// Write code to create a function that accepts a string and returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the character is found in the string

var stringMap = function(str) {
    var strArray = str.split('');
    var wordObj = {};


    for(i = 0; i < strArray.length; i++) {
        letter = strArray[i];
        if (wordObj[letter]) {
            wordObj[letter].push(i);
        } else {
            var array = [i];
            wordObj[letter] = array;
        }
    }

    return wordObj;
};
