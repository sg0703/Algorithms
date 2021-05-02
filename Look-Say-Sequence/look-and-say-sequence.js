// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    var number = JSON.stringify(n);   
    var lookSayNumber = ''; // use string
    var prefix = 1;

    for(i = 0; i < number.length; i++) {
        // make sure we are not going to compare values outside of length of number
        var currentNumber = number[i];
        var howManyNums = 1;
        // loop through all numbers AFTER current number
        for (c = i + 1; c < (number.length); c++) {
            if (currentNumber === number[c]) {
                howManyNums++;
            }
        }
        lookSayNumber += howManyNums + currentNumber;
        i+=howManyNums-1;
    }
    
    return Number(lookSayNumber);
};