// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    var sameNumber = 0;

    for(i = 0; i < arrA.length; i++) {
        for(c = 0; c < arrB.length; c++) {
            if(arrA[i] === arrB[c]) {
                console.log(arrA[i] + ' ' + arrB[c]);
                sameNumber = arrA[i];
            }
        }
    }

    return sameNumber;
};
