// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(str) {
    var sortedTimes = str.sort();
    // (a,b) => a - b
    console.log(sortedTimes);

    if (str.length > 0) {
        var sum = 0; // cumulative sum of numbers
        var numbersUsed = 0; // count of numbers used

        for(i = 0; i < str.length; i++) {
            if(sum + str[i] <= 60) {
                sum+=str[i];
                numbersUsed++;
            }
        }
    }
    else {
        return 0;
    }
    console.log(sum);
    return numbersUsed;
};
