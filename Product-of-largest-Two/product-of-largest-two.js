// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    var highestValue = 0;
    var secondHighest = 0;
    for (i = 0; i < arr.length; i++) {
        if (i === 0) {
            highestValue = arr[i];
        }
        else if (arr[i] > highestValue){
            secondHighest = highestValue;
            highestValue = arr[i];

        }
    }
    return highestValue * secondHighest;
};
