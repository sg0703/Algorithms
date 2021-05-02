// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function(arr1, arr2) {
    let solution = [];
    let difference = arr1[0] - arr2[arr2.length - 1];
    
    if (difference < 0) {
        difference *= -1;
    }

    // loop through first array, then loop through second
    for(let i = 0; i < arr1.length; i++) {
        for(let n = arr2.length; n >= 0; n--) {
            let newDifference = arr1[i] - arr2[n];

            // if negative, correct this
            if (newDifference < 0) {
                newDifference *= -1;
            }
            
            if(newDifference === 0) {
                return [arr1[i],arr2[n]];
            }
            else if (newDifference < difference) {
                difference = newDifference;
                solution[0] = arr1[i];
                solution[1] = arr2[n];
            }
        }
    }

    return solution;
};