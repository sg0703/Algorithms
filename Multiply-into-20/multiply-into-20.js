// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return false

var multiplyInto20 = function(arr) {
    var multiply = false;

    for(i = 0; i < arr.length; i++) {
        for(c = 0; c < arr.length; c++) {
            // don't let number count itself
            if (c != i && arr[i] * arr[c] === 20) {
                multiply = true;
            }
        }
    }
    return multiply; 
};
