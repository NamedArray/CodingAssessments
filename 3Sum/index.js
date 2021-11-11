// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const nums = [-1, 0, 1, 2, -1, -4]

const threeSum = function(nums) {
    /**
     * try this guy:
     * 
     * Code And Coffee
     * 3 Sum & 4 Sum (Generalized for k sum) | LeetCode 15 | LeetCode 18 | Medium
     * https://www.youtube.com/watch?v=-vu9GpZfqLY
     * 
     */
    
    const len = nums.length;
    const sets = [];
}


const threeSum_FAILED_2= function (nums) {

    /**
     * 3Sum - The Daily Programmer #323
     * https://youtu.be/Zdf_AuEAWpY
     */

    const len = nums.length;
    const sets = [];

    //two away from the end
    for (let i = 0; i < len - 2; i++) {
        //console.log(`i loop:  ${i}`)

        //-1 because k will always take the last spot
        for (let j = i + 1; j < len - 1; j++) {
            // console.log(`j loop:  ${j}`)

            for (let k = j + 1; k < len; k++) {
                //console.log(`k loop:  ${k}`)

                const a = nums[i];
                const b = nums[j];
                const c = nums[k];
                // const set = `${a} ${b} ${c}`;
                let set = [];
                set.push(a, b, c)

                if (a + b + c === 0 &&
                    sets.indexOf(set) === -1) {

                    sets.push(set);
                }
            }
        }
    }
    console.log(sets)
    return sets;
}

const threeSum_FAILED_1 = function (nums) {

    /**
     * 3Sum - Readable Javascript Solution
     * Coding Barista
     * https://youtu.be/Kr64LNnNp5g
     */
    const len = nums.length;
    let result = [];

    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;

    for (let i = 0; i < len; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        left = i + 1;
        right = nums.length - 1;
        let sum = 0;

        while (left < right) {
            sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i] + nums[left] + nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    console.log(result)
    return result;



}

const answer = threeSum(nums);
console.log(answer)