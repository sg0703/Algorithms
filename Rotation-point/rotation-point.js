// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
    // copy values into new array, then sort it 
    let tempWords = [...words];
    let sortedWords = tempWords.sort();

    // set default rotationPoint
    let rotationPoint = -1;
    let done = false;

    for(let i = 0; i < words.length; i++) {
        // find first occurrence of difference, then see where the different word was in the first array - that is rotation point
        // store that value and don't overwrite it 
        if(words[i] !== sortedWords[i] && !done) {
            rotationPoint = words.indexOf(sortedWords[i]);
            done = true;
        }
    }

    // return rotation point
    return rotationPoint;
};
