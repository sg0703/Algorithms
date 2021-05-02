// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
    var numbers = num.toString().split('');
    var toPower = numbers.length;
    var powers = 0;

    for (let i = 0; i < numbers.length; i++) {
        powers += (Number(numbers[i]) ** toPower);
    }

    if (powers === num) {
        return true;
    }
    else {
        return false;
    }
};