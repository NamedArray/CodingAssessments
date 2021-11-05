/*
    https://leetcode.com/problems/two-sum/
*/

const nums = [2, 7, 11, 15]
const target = 9;

// const nums = [3,2,4]
// const target = 6

// const nums = [3, 3]
// const target = 6

// const nums = [0,4,3,0]
// const target = 0;


var twoSum = function (nums, target) {

    const resultArray = [];

    // main outer loop
    for (let i = 0; i < nums.length; i++) {

        let match = nums.find(x => {
            return nums[i] + x === target;
        });

        const matchIndex = nums.indexOf(match);
        if (matchIndex == i) { continue; }

        if (typeof match === 'number') {
            //console.log(`i: ${i}, nums[i]: ${nums[i]} x: ${match}`)
            resultArray.push(i, matchIndex);
            break;
        }

    };

    return resultArray;

};


var twoSumWithLoops = function (nums, target) {

    let resultArray = [];

    // main outer loop
    // start at index 0
    for (let i = 0; i < nums.length; i++) {

        // console.log(`outer loop:  ${nums[i]}`)

        // inner loop
        // start at index 1
        for (let j = i + 1; j < nums.length; j++) {
            
            // console.log(`inner loop:  ${nums[j]}`)
            // console.log(`calc: ${nums[i] + nums[j]}`)
            
            if (nums[i] + nums[j] == target) {
                resultArray.push(i, j)
            };
        
        };

    };

    return resultArray;

};




const answer = twoSumWithLoops(nums, target);
console.log(answer);