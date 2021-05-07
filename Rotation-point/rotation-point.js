// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
    let key = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13, 
        n: 14, 
        o: 15, 
        p: 16, 
        q: 17,
        r: 18,
        s: 19, 
        t: 20,
        u: 21,
        v: 22, 
        w: 23,
        x: 24, 
        y: 25, 
        z: 26
    };

    // use sort function then compare to original array
    let tempWords = [...words];
    let sortedWords = tempWords.sort();

    // set default rotationPoint
    let rotationPoint = -1;
    let done = false;

    for(let i = 0; i < words.length; i++) {
        // find first occurrence of difference, then see where the different word was in the first array - that is rotation point
        if(words[i] !== sortedWords[i] && !done) {
            rotationPoint = words.indexOf(sortedWords[i]);
            done = true;
        }
    }

    return rotationPoint;
};
