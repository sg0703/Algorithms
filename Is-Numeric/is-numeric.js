// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
    var characterArray = ['0','1','2','3','4','5','6','7','8','9','.','+','-'];
    var numValidChars = 0;
    var number = false;
    var decimalCount = 0;

    // make sure there's something there
    if (str.length > 0) {
        // loop through user input
        for (i = 0; i < str.length; i++) {
            // loop through character array
            for (c = 0; c < characterArray.length; c++) {
                // if number present anywhere, good
                if (str[i] === characterArray[c] && c < 10) {
                    number = true;
                    numValidChars++;
                }
                // if decimal point present anyhwere, good
                else if (str[i] === characterArray[c] && c === 10) {
                    numValidChars++;
                    decimalCount++;
                }
                // if + or - present ONLY AT START, good
                else if (str[i] === characterArray[c] && c >= 11 && i === 0) {
                    numValidChars++;
                }
            }
        }    
    }
    if (number && numValidChars === str.length && decimalCount <= 1) {
        return true;
    }    
    else {
        return false;
    }
}
