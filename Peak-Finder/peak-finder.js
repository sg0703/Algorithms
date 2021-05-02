// Write a function that takes an array of integers containing exactly one peak. A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

var peakFinder = function(nums) {
    var peak = 0;

    if (nums.length === 0) {
        return peak;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    console.log('here');
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > peak) {
            peak = nums[i]; 
        }
    }

    return peak;
};
