// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

var minIncrement = function(nums) {
    // ignore unique numbers
    // target repeat numbers
    // increase them to make them unique

    let sorted = nums.sort((a,b) => a - b);
    let increments = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let n = 0; n < nums.length; n++) {
            // skip the current number we're evaluating and check for duplicate
            // increase by one to make them different
            if((n !== i) && nums[i] === nums[n]) {
                nums[n]++;
                increments++;
            }
        }
    }

    return increments; 
};
