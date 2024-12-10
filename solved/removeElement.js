
// not accepted by  leetcode
var removeElement = function (nums, val) {
    nums = nums?.filter((v) => v !== val)
    return nums
};
console.log(removeElement([3, 2, 2, 3], 2));

// <-- accepted by leetcode-->
var removeElement = function (nums, val) {
    let k = 0
    nums?.map((v, i) => {
        if (v !== val) {
            nums[k] = v
            k += 1
        }

    })
    return k
};
console.log(removeElement([3, 2, 2, 3], 3));
