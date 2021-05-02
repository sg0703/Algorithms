// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    var strArray = str.split('');  

    var ones = 0;
    var zeros = 0;

    for(i = 0; i < strArray.length; i++) {
        if (strArray[i] === '0') {
            zeros++;
        }
        else if (strArray[i] === '1') {
            ones++;
        }
    }

    console.log('Ones: ' + ones);
    console.log('Zeros: ' + zeros);

    if (zeros === ones) {
        return true;
    }
    else {
        return false;
    }

};
