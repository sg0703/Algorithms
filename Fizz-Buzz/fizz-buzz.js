// takes an array and for each element prints "Fizz" for numbers evenly divisible by 3
// "Buzz" for numbers evenly divisible by 5, 
// "Fizz Buzz" for numbers evenly divisible by 3 AND 5. 
// Otherwise it prints the number if not evenly divisible by 3 or 5.

var fizzBuzz = function(arr) {
    var i = 0;
    var arrayLength = arr.length; 
    while (i < arrayLength) {
        if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
            console.log("Fizz Buzz");
        }
        else if (arr[i] % 5 === 0) {
            console.log("Buzz");
        }
        else if (arr[i] % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(arr[i]);
        }
        i++;
    }
};
