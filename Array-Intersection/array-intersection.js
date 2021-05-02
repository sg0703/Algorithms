// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    var intersecting = [];
    var done = false;

    for(let n = 0; n < arr1.length; n++) {
        for(let i = 0; i < arr2.length; i++) {
            if(arr1[n] === arr2[i] && !done) {
                intersecting.push(arr1[n]);
                arr1.splice(n,1);
                arr2.splice(i,1);
                done = true;
            }
        } 
        done = false;
    };

    return intersecting;
};
