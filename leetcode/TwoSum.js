/*
    Solution 1 : Nested Loop
    ----------------------
    Time Complexity : O(N^2)
    Space Complexity : O(1)
*/

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/*
    Solution 2 : Hashmap
    ----------------------
    Time Complexity : O(N)
    Space Complexity : O(N)
*/

var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
        console.log(map);
    }
};

console.log(twoSum([2, 7, 11, 15], 22));
