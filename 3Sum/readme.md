## 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 
```
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
```

## Sources for Answer

freeCodeCamp.org, [3Sum - The Daily Programmer #323](https://www.youtube.com/watch?v=Zdf_AuEAWpY)


## Notes

pos: i, j, k
[   0   1   2   3   ]
[   -8  -7  5   2   ]
i   i,j     i,j,k
-8  -8,-7   -8,-7,5
-7  -8,5    -8,-7,2
5   -8,2    -8,5,2
2   i+1     -7,5,2
    -7,5
    -7,2
    i+1
    5,2