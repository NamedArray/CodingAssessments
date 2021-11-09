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


var twoSumVer2 = function (nums, target) {
    // video: https://www.youtube.com/watch?v=_CoCO62fn_E
    // title:  Leetcode Two Sum Solution | Coding Interview Question
    // techsith

    /**
     * [2, 7, 11,15]
     * 
     * target - 2  = 7
     * 
     * {
     *  7,complement = the answer of 9-2
     *  0,index of the number that was subtracted from the target
     *  complement: index
     *  7:0
     * }
     */

    const comp = new Map();
    const len = nums.length;

    for (let i = 0; i < len; i++) {

        //if our number exists as a complement
        //nums[i] = 2, index 0 value is 2
        //comp[2] >>>> undefined, does not exist?
        //nums[i] = 7, index 1 value is 7
        //comp[7] >>> value is 0
        //asking, does a num in the array = 0 or greater?  (which is holding the index of the value in nums array)
        if (comp[nums[i]] >= 0) {
            // console.log(comp[nums[i]])
            // 0,1   
            return [comp[nums[i]], i];
        }
        // 9 - 2 = 7
        // comp[7] = 0  (2's index)
        // comp should be = {7 : 0}
        comp[target - nums[i]] = i;
        //comp is a map at this point {7:0}
        // console.log(comp)
        // console.log(comp[i])

    };
    // console.log(comp)

    //if nothing found
    return [];




}





const answer = twoSumVer2(nums, target);
console.log(answer);