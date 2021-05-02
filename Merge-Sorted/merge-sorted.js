// Write code to merge two sorted arrays into a new sorted array

// ask about better way to solve this one

var mergeSorted = function (arr1, arr2) {
    var newArray = [];

    let lowestNumber = arr1[0] > arr2[0] ? arr2[0] : arr1[0];
    let highestIndex = arr1[0] > arr2[0] ? arr1.length - 1 : arr2.length - 1;
    let highestNumber = arr1[0] > arr2[0] ? arr1[highestIndex] : arr2[highestIndex];

    if (arr1.length > 0 && arr2.length > 0) {
        for (i = lowestNumber; i <= highestNumber; i++) {
            for(c = 0; c < arr2.length; c++) {
                if (arr2[c] === i) {
                    newArray.push(arr2[c]);
                   // arr2.splice(c,1);
                }
            }
            for (b = 0; b < arr1.length; b++) {
                if (arr1[b] === i) {
                    newArray.push(arr1[b]);
                   // arr1.splice(b,1);
                }
            }
        }
    }
    else if (arr2.length == 0){
        return arr1;
    }
    else if (arr1.length == 0) {
        return arr2;
    }

    return newArray;

};